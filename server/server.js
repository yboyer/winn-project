'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const Datastore = require('nedb');
const uuid = require('node-uuid');
const fs = require('fs');
const path = require('path');

const PORT = process.argv[2] || 3000;
const db = new Datastore();

const app = express();
app.use(bodyParser.json());

// Insert some data
if (process.env.NODE_ENV !== 'production') {
  db.insert(JSON.parse(fs.readFileSync(path.join(__dirname, 'defaultData.json'))));
}

// Allow CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,DELETE');
  next();
});


/**
 * @api {GET} /transports Retreives a collection of transport
 * @apiName GetAll
 * @apiGroup Transport
 *
 * @apiSuccess {Object[]} _                      Array of transport objects
 * @apiSuccess {String}   _._id                  Unique transport id
 * @apiSuccess {String}   _.title                Description
 * @apiSuccess {String}   _.status               Status (<code>PROPOSED</code>, <code>CONFIRMED</code>, <code>RESERVED</code>, <code>CHECKEDIN</code>, <code>CHECKEDOUT</code>)
 * @apiSuccess {Object}   _.departure            Departure informations
 * @apiSuccess {Number}   _.departure.date       Timestamp
 * @apiSuccess {Object}   _.departure.point      Postion
 * @apiSuccess {Number}   _.departure.point.lat  Latitude
 * @apiSuccess {Number}   _.departure.point.lon  Longitude
 * @apiSuccess {Object}   _.arrival              Arrival informations
 * @apiSuccess {Number}   _.arrival.date         Timestamp
 * @apiSuccess {Object}   _.arrival.point        Postion
 * @apiSuccess {Number}   _.arrival.point.lat    Latitude
 * @apiSuccess {Number}   _.arrival.point.lon    Longitude
 *
 * @apiSuccessExample {js} Success response (example):
 *  [ { title: 'Paris - Caen',
 *      status: 'PROPOSED',
 *      departure:
 *       { date: 1474286400000,
 *         point: { lat: 48.8588377, lon: 2.2775179 } },
 *      arrival:
 *       { date: 1474297200000,
 *         point: { lat: 49.1846226, lon: -0.4072782 } },
 *      _id: '55bcc20b-4e59-4f47-b29c-ff5bc97f01d4' } ]
 */
app.get('/transports', (req, res) => {
  db.find({}, (err, docs) => {
    res.json(docs);
  });
});


/**
 * @api {GET} /transports/:id Retreives one transport
 * @apiName GetOne
 * @apiGroup Transport
 *
 * @apiParam {String} id Unique transport id
 *
 * @apiUse TransportResponse200
 * @apiUse TransportResponse
 */
app.get('/transports/:id', (req, res) => {
  db.findOne({ _id: req.params.id }, (err, doc) => {
    if (doc === null) {
      return res.status(400).end();
    }
    doc.arrival.date = +new Date(doc.arrival.date);
    doc.departure.date = +new Date(doc.departure.date);
    res.json(doc);
  });
});


/**
 * @api {PUT} /transports Add a transport
 * @apiName Add
 * @apiGroup Transport
 *
 * @apiUse TransportResponse
 * @apiUse TransportResponse201
 *
 * @apiParam {String}   title                Description
 * @apiParam {String}   status               Status (<code>PROPOSED</code>, <code>CONFIRMED</code>, <code>RESERVED</code>, <code>CHECKEDIN</code>, <code>CHECKEDOUT</code>)
 * @apiParam {Object}   departure            Departure informations
 * @apiParam {Number}   departure.date       Timestamp
 * @apiParam {Object}   departure.point      Postion
 * @apiParam {Number}   departure.point.lat  Latitude
 * @apiParam {Number}   departure.point.lon  Longitude
 * @apiParam {Object}   arrival              Arrival informations
 * @apiParam {Number}   arrival.date         Timestamp
 * @apiParam {Object}   arrival.point        Postion
 * @apiParam {Number}   arrival.point.lat    Latitude
 * @apiParam {Number}   arrival.point.lon    Longitude
 *
 * @apiParamExample {json} Request (example):
 *  { title: 'Paris - Caen',
 *    status: 'PROPOSED',
 *    departure:
 *     { date: 1474286400000,
 *       point: { lat: 48.8588377, lon: 2.2775179 } },
 *    arrival:
 *     { date: 1474297200000,
 *       point: { lat: 49.1846226, lon: -0.4072782 } } }
 */
app.put('/transports', (req, res) => {
  const data = req.body;
  // TODO: Check data
  data._id = uuid.v4();

  db.insert(data, (err, doc) => {
    res.status(201).json(doc);
  });
});

/**
 * @api {PUT} /transports/:id Update a transport
 * @apiDescription All elements are optional, but a least one is required.
 * @apiName Update
 * @apiGroup Transport
 *
 * @apiUse TransportResponse
 * @apiUse TransportResponse202
 *
 * @apiParam {String}   id                     Unique transport id
 *
 * @apiParam {String}   [title]                Description
 * @apiParam {String}   [status]               Status (<code>PROPOSED</code>, <code>CONFIRMED</code>, <code>RESERVED</code>, <code>CHECKEDIN</code>, <code>CHECKEDOUT</code>)
 * @apiParam {Object}   [departure]            Departure informations
 * @apiParam {Number}   [departure.date]       Timestamp
 * @apiParam {Object}   [departure.point]      Postion
 * @apiParam {Number}   [departure.point.lat]  Latitude
 * @apiParam {Number}   [departure.point.lon]  Longitude
 * @apiParam {Object}   [arrival]              Arrival informations
 * @apiParam {Number}   [arrival.date]         Timestamp
 * @apiParam {Object}   [arrival.point]        Postion
 * @apiParam {Number}   [arrival.point.lat]    Latitude
 * @apiParam {Number}   [arrival.point.lon]    Longitude
 *
 * @apiParamExample {json} Request (example):
 *  { status: 'RESERVED' }
 */
app.put('/transports/:id', (req, res) => {
  const data = req.body;
  // TODO: Check data

  db.update({ _id: req.params.id }, { $set: data }, { returnUpdatedDocs: true }, (err, num, doc) => {
    res.status(202).json(doc);
  });
});

/**
 * @api {DELETE} /transports/:id Delete a transport
 * @apiName Delete
 * @apiGroup Transport
 *
 * @apiParam {String} id Unique transport id
 */
app.delete('/transports/:id', (req, res) => {
  db.remove({ _id: req.params.id }, (err, numRemoved) => {
    res.end();
  });
});


// Serve all client files
app.use('/gui/', express.static(path.join(__dirname, '../client/dist')));
// For the Angular's route redirections
app.get('/gui/*', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../client/dist/index.html'));
});



if(!module.parent){ // if the script is not required
  // START
  app.listen(PORT, () => {
    console.log(`Listennig on ${PORT}`);
  });
}

// Export the app for the test
module.exports = app;




/**
 * @apiDefine TransportResponse200
 *
 * @apiSuccess {String}   _id                  Unique transport id
 * @apiSuccess {String}   title                Description
 * @apiSuccess {String}   status               Status (<code>PROPOSED</code>, <code>CONFIRMED</code>, <code>RESERVED</code>, <code>CHECKEDIN</code>, <code>CHECKEDOUT</code>)
 * @apiSuccess {Object}   departure            Departure informations
 * @apiSuccess {Number}   departure.date       Timestamp
 * @apiSuccess {Object}   departure.point      Postion
 * @apiSuccess {Number}   departure.point.lat  Latitude
 * @apiSuccess {Number}   departure.point.lon  Longitude
 * @apiSuccess {Object}   arrival              Arrival informations
 * @apiSuccess {Number}   arrival.date         Timestamp
 * @apiSuccess {Object}   arrival.point        Postion
 * @apiSuccess {Number}   arrival.point.lat    Latitude
 * @apiSuccess {Number}   arrival.point.lon    Longitude
 */

/**
 * @apiDefine TransportResponse201
 *
 * @apiSuccess (Success 201) {String}   _id                  Unique transport id
 * @apiSuccess (Success 201) {String}   title                Description
 * @apiSuccess (Success 201) {String}   status               Status (<code>PROPOSED</code>, <code>CONFIRMED</code>, <code>RESERVED</code>, <code>CHECKEDIN</code>, <code>CHECKEDOUT</code>)
 * @apiSuccess (Success 201) {Object}   departure            Departure informations
 * @apiSuccess (Success 201) {Number}   departure.date       Timestamp
 * @apiSuccess (Success 201) {Object}   departure.point      Postion
 * @apiSuccess (Success 201) {Number}   departure.point.lat  Latitude
 * @apiSuccess (Success 201) {Number}   departure.point.lon  Longitude
 * @apiSuccess (Success 201) {Object}   arrival              Arrival informations
 * @apiSuccess (Success 201) {Number}   arrival.date         Timestamp
 * @apiSuccess (Success 201) {Object}   arrival.point        Postion
 * @apiSuccess (Success 201) {Number}   arrival.point.lat    Latitude
 * @apiSuccess (Success 201) {Number}   arrival.point.lon    Longitude
 */

/**
 * @apiDefine TransportResponse202
 *
 * @apiSuccess (Success 202) {String}   _id                  Unique transport id
 * @apiSuccess (Success 202) {String}   title                Description
 * @apiSuccess (Success 202) {String}   status               Status (<code>PROPOSED</code>, <code>CONFIRMED</code>, <code>RESERVED</code>, <code>CHECKEDIN</code>, <code>CHECKEDOUT</code>)
 * @apiSuccess (Success 202) {Object}   departure            Departure informations
 * @apiSuccess (Success 202) {Number}   departure.date       Timestamp
 * @apiSuccess (Success 202) {Object}   departure.point      Postion
 * @apiSuccess (Success 202) {Number}   departure.point.lat  Latitude
 * @apiSuccess (Success 202) {Number}   departure.point.lon  Longitude
 * @apiSuccess (Success 202) {Object}   arrival              Arrival informations
 * @apiSuccess (Success 202) {Number}   arrival.date         Timestamp
 * @apiSuccess (Success 202) {Object}   arrival.point        Postion
 * @apiSuccess (Success 202) {Number}   arrival.point.lat    Latitude
 * @apiSuccess (Success 202) {Number}   arrival.point.lon    Longitude
 */

/**
 * @apiDefine TransportResponse
 *
 * @apiSuccessExample {json} Success response (example):
 *  { title: 'Paris - Caen',
 *    status: 'PROPOSED',
 *    departure:
 *     { date: 1474286400000,
 *       point: { lat: 48.8588377, lon: 2.2775179 } },
 *    arrival:
 *     { date: 1474297200000,
 *       point: { lat: 49.1846226, lon: -0.4072782 } },
 *    _id: '55bcc20b-4e59-4f47-b29c-ff5bc97f01d4' }
 */
