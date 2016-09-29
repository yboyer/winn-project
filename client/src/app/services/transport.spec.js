import {TestBed, inject, async} from '@angular/core/testing';
import {MockBackend} from '@angular/http/testing';
import {Http, BaseRequestOptions, Response} from '@angular/http';
import {TransportService} from './transport.js';
import {TransportObject} from '../TransportObject.js';

describe('transport service', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        TransportService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http, useFactory: (backend, defaultOptions) => new Http(backend, defaultOptions),
          deps: [MockBackend, BaseRequestOptions]
        }
      ]
    }).compileComponents();
  }));

  describe('getTransports()', () => {
    it('should return 2 transports', inject([MockBackend, TransportService], (mockBackend, transportService) => {
      mockBackend.connections.subscribe(c => c.mockRespond(new Response({
        body: [new TransportObject(), new TransportObject()]
      })));

      transportService.getTransports().subscribe(transports => {
        expect(transports.length).toBe(2);
      });
    }));
  });

  describe('getTransport(id)', () => {
    it('should return a transport', inject([MockBackend, TransportService], (mockBackend, transportService) => {
      const res = new TransportObject();
      const id = 'testid';
      res._id = id;

      mockBackend.connections.subscribe(c => c.mockRespond(new Response({
        body: res
      })));

      transportService.getTransport(id).subscribe(transport => {
        expect(transport._id).toBe(id);
      });
    }));
  });

  describe('addTransport(data)', () => {
    it('should add a transport', done => {
      inject([MockBackend, TransportService], (mockBackend, transportService) => {
        const data = JSON.stringify(new TransportObject());

        mockBackend.connections.subscribe(c => c.mockRespond(new Response({
          body: new TransportObject(),
          status: 201
        })));

        transportService.addTransport(data)
          .then(res => {
            expect(res).toBeDefined();
            done();
          })
          .catch(err => {
            expect(err).not.toBeDefined();
            done();
          });
      })();
    });

    it('should return an error', done => {
      inject([MockBackend, TransportService], (mockBackend, transportService) => {
        const data = JSON.stringify(new TransportObject());

        mockBackend.connections.subscribe(c => c.mockRespond(new Response({
          body: new TransportObject(),
          status: 400
        })));

        transportService.addTransport(data)
          .then(res => {
            expect(res).not.toBeDefined();
            done();
          })
          .catch(err => {
            expect(err).toBeDefined();
            done();
          });
      })();
    });
  });

  describe('updateTransport(id, data)', () => {
    const id = 'testid';
    const data = JSON.stringify(new TransportObject());

    it('should update a transport', done => {
      inject([MockBackend, TransportService], (mockBackend, transportService) => {
        mockBackend.connections.subscribe(c => c.mockRespond(new Response({
          status: 202
        })));

        transportService.updateTransport(id, data)
          .then(res => {
            expect(res).not.toBeDefined();
            done();
          })
          .catch(err => {
            expect(err).not.toBeDefined();
            done();
          });
      })();
    });

    it('should return an error', done => {
      inject([MockBackend, TransportService], (mockBackend, transportService) => {
        mockBackend.connections.subscribe(c => c.mockRespond(new Response({
          status: 400
        })));

        transportService.updateTransport(id, data)
          .then(res => {
            expect(res).toBeDefined();
            done();
          })
          .catch(err => {
            expect(err).toBeDefined();
            done();
          });
      })();
    });
  });

  describe('deleteTransport(id)', () => {
    const id = 'testid';

    it('should update a transport', done => {
      inject([MockBackend, TransportService], (mockBackend, transportService) => {
        mockBackend.connections.subscribe(c => c.mockRespond(new Response({
          status: 200
        })));

        transportService.deleteTransport(id)
          .then(res => {
            expect(res).not.toBeDefined();
            done();
          })
          .catch(err => {
            expect(err).not.toBeDefined();
            done();
          });
      })();
    });

    it('should return an error', done => {
      inject([MockBackend, TransportService], (mockBackend, transportService) => {
        mockBackend.connections.subscribe(c => c.mockRespond(new Response({
          status: 400
        })));

        transportService.deleteTransport(id)
          .then(res => {
            expect(res).toBeDefined();
            done();
          })
          .catch(err => {
            expect(err).toBeDefined();
            done();
          });
      })();
    });
  });
});
