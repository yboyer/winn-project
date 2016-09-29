const mocha = new(require('./server/node_modules/mocha'))({});
const karma = require('./client/node_modules/karma');
const exec = require('child_process').exec;
const path = require('path');


let failures = 0;

const serverTests = new Promise((resolve) => {
  mocha.addFile('./server/test/server.js');
  mocha.run(resolve);
});

const clientTests = new Promise((resolve) => {
  process.chdir('client');
  const configFile = path.join(__dirname, 'client/conf/karma.conf.js');
  const karmaServer = new karma.Server({
    configFile
  }, resolve);
  karmaServer.start();
});

serverTests.then((fails) => {
  failures += fails;
  return clientTests;
}).then((fails) => {
  failures += fails;
}).then(onTestsFinished);

onTestsFinished();



function onTestsFinished() {
  if (!failures) {
    // build client
    // create docker image
    // push docker image
  }
}
