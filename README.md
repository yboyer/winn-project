# Transport manager
> Projet from [msalles-winn](https://github.com/msalles-winn/base-project/)

Docker image available at https://hub.docker.com/r/yboyer/winn-project/

![](.readme/screen.png)

### Technologies
- __Server__
  - `Node.js`
    - `nedb` - InMemory DBMS
    - `express` - Web framework
      - `body-parser` - JSON request playload parser
    - `node-uuid` - UUID genarator
  - `mocha` - Tests
    - `supertest` - HTTP assertions
- __Client__
  - `angular`
    - `jspm` - Angular dependencies
      - `systemjs` - Dynamic module loader
    - `babel` - 6to5 compiler
    - `material-design-lite` - Google's material design style
    - `google-maps` - Google Maps
  - `gulp` - Task runner
  - `browser-sync` - Synced website
  - `sass` - Dynamic style sheet generator
  - `karma` - Tests on browsers (rendering and methods of Angular components)
    - `jasmine` - Tests


- Production
  - `docker` - App packager

---
### Pro
  - Latest version of [Angular](http://angular.io/): `V2.0.1`
  - [Docker image](https://hub.docker.com/r/yboyer/winn-project/) size is about 20MB (shipped with `Node.js`)
  - Lightweight DBMS and subset of MongoDB with [`NeDB`](https://github.com/louischatriot/nedb)
  - Use of `ECMAScript 6` and `ECMAScript 7`
  - NPM scripts to do everything
  - Automatic front-end development tasks with `Gulp`
  - Automatic Docker image build, push and deployment with shell scripts

### Cons
  - No server-side verifications about the transport object sent by others ways than the built website
  - No checks on the date (eg when the arrival date is earlier than the departure date)
  - No UX for the pending actions sent by clients

---

## Usage: _(Git)_
### Install
##### Clone the GitHub repo:
```bash
git clone https://github.com/yboyer/winn-project.git
cd winn-project
```
##### Install dependencies:
```bash
npm i
```
##### Build client:
```bash
npm run build-client
```
### Run
##### Run and listen on port `3000`
```bash
npm start
```

## Usage: _(Docker)_
##### Download the Docker image from the hub:
```bash
docker pull yboyer/winn-project
```
##### Run and listen on port `3000`
```bash
docker run yboyer/winn-project
```

## Global Development
#### NPM scripts
  - `npm start [PORT]` to launch the server
  - `npm run build` to build the client
  - `npm run doc_client` to generate client
  - `npm run doc_server` to generate server
  - `npm run doc` to generate for both client and server
  - `npm run test_client` to launch the unit tests for the client
  - `npm run test_server` to launch the unit tests for the server
  - `npm run test` to launch the unit tests for both client and server

##### Build a Docker image
```bash
./scripts/build.sh
```
##### Push the Docker image
```bash
./scripts/push.sh
```
##### Deploy the Docker image on the server
```bash
./scripts/deploy.sh
```

## Server Development
The server can be started by `npm start` from the root or `node server` from the server directory.

It listens from the port `3000` by default but it can be changed by args.
```bash
# npm start [PORT || 3000]
npm start 3005  
# or  
node server 3005  
```
#### NPM scripts
  - `npm start [PORT]` to launch the server
  - `npm test` to launch the unit tests with Mocha
  - `npm run doc` to generate documentation

## Client Development
> ### UglifyJS minification problems
> You need to fix the `uglify-js` version of the `gulp-uglify` dependence. (See [client/README.md](client/README.md))

#### NPM scripts
  - `npm run build` to build an optimized version of the application in /dist
  - `npm run serve` to launch a browser sync server
  - `npm run serve:dist` to launch a server on the optimized application
  - `npm run test` to launch the unit tests with Karma
  - `npm run test:auto` to launch the unit tests with Karma in watch mode


  - `npm run doc` to generate doc

#### Or Gulp tasks
If [`gulp-cli`](https://www.npmjs.com/package/gulp-cli) is installed (`npm i gulp-cli -g`):
  - `gulp` or `gulp build`
  - `gulp serve`
  - `gulp serve:dist`
  - `gulp test`
  - `gulp test:auto`
