'use strict';

const assert = require('assert');
const app = require('../server');
const server = require('supertest')(app);


describe('REST Transport:', () => {
  const transport = {
    "title": "Paris - Caen",
    "status": "PROPOSED",
    "departure": {
      "date": +new Date("2016-09-19T12:00:00.000Z"),
      "point": {
        "lat": 48.8588377,
        "lon": 2.2775179
      }
    },
    "arrival": {
      "date": +new Date("2016-09-19T15:00:00.000Z"),
      "point": {
        "lat": 49.1846226,
        "lon": -0.4072782
      }
    }
  };

  it('should create a transport', (done) => {
    server.put('/transports')
      .send(transport)
      .expect(201)
      .expect('Content-type', /json/)
      .expect((res) => {
        assert.equal(res.body.title, transport.title);
        transport._id = res.body._id;
      })
      .end(done);
  });

  it('should retreive all transports', (done) => {
    server.get('/transports')
      .expect(200)
      .expect('Content-type', /json/)
      .expect((res) => {
        assert.notDeepStrictEqual(res.body, []);

        const ids = res.body.map((transport) => transport._id);
        assert.notEqual(ids.indexOf(transport._id), -1);
      })
      .end(done);
  });

  it('should retreive a transport', (done) => {
    server.get(`/transports/${transport._id}`)
      .expect(200)
      .expect('Content-type', /json/)
      .expect((res) => {
        assert.equal(res.body._id, transport._id);
      })
      .end(done);
  });

  it('should update a transport', (done) => {
    transport.status = 'RESERVED';

    server.put(`/transports/${transport._id}`)
      .send({
        status: transport.status
      })
      .expect(202)
      .expect((res) => {
        assert.equal(res.body.status, transport.status);
      })
      .end(done);
  });

  it('should check changes (update)', (done) => {
    server.get(`/transports/${transport._id}`)
      .expect(200)
      .expect('Content-type', /json/)
      .expect((res) => {
        assert.equal(res.body.status, transport.status);
      })
      .end(done);
  });

  it('should remove a transport', (done) => {
    server.delete(`/transports/${transport._id}`)
      .expect(200)
      .end(done);
  });

  it('should check changes (remove)', (done) => {
    server.get(`/transports/${transport._id}`)
      .expect(400)
      .expect('')
      .end(done);
  });
});
