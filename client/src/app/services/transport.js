import {Http, Headers, RequestOptions} from '@angular/http';
import {production} from '@system-env';
import {TransportObject} from '../TransportObject.js';

const BASE_URL = production ? '' : 'http://localhost:3005';

export class TransportService {
  options = new RequestOptions({
    headers: new Headers({'Content-Type': 'application/json'})
  });

  /**
   * @param {Http} http @angular/http.Http client
   */
  constructor(http: Http) {
    this._http = http;
  }

  /**
   * Retreive all transports from the DB
   * @return {Observable} Result of the request
   */
  getTransports() {
    return this._http
      .get(`${BASE_URL}/transports`)
      .map(res => res.json().map(transport => new TransportObject(transport)));
  }

  /**
   * Retreive a transport from the DB by its ID
   * @param {String} id UUID of the transport
   * @return {Observable} Result of the request
   */
  getTransport(id) {
    return this._http
      .get(`${BASE_URL}/transports/${id}`)
      .map(res => new TransportObject(res.json()));
  }

  /**
   * Adds a transport to the DB
   * @param {String} data JSON of data to send
   * @return {Promise} Result of the request
   */
  addTransport(data) {
    return this._http
      .put(`${BASE_URL}/transports`, data, this.options)
      .toPromise()
      .then(res => {
        if (res.status === 201) {
          return new TransportObject(res.json());
        } else if (res.status === 400) {
          return Promise.reject(res.json().message);
        }
        return Promise.reject('not added');
      })
      .catch(err => {
        const errMsg = (err.message) ? err.message : err.status ? `${err.status} - ${err.statusText}` : 'Server error';
        console.error(errMsg);
        return Promise.reject(errMsg);
      });
  }

  /**
   * Updates a transport from the DB
   * @param {String} id UUID of the transport
   * @param {String} data JSON of data to send
   * @return {Promise} Result of the request
   */
  updateTransport(id, data) {
    return this._http
      .put(`${BASE_URL}/transports/${id}`, data, this.options)
      .toPromise()
      .then(res => {
        if (res.status === 202) {
          return;
        } else if (res.status === 400) {
          return Promise.reject(res.json().message);
        }
        return Promise.reject('not updated');
      })
      .catch(err => {
        const errMsg = (err.message) ? err.message : err.status ? `${err.status} - ${err.statusText}` : 'Server error';
        console.error(errMsg);
        return Promise.reject(errMsg);
      });
  }

  /**
   * Deletes a transport from the DB
   * @param {String} id UUID of the transport
   * @return {Promise} Result of the request
   */
  deleteTransport(id) {
    return this._http
      .delete(`${BASE_URL}/transports/${id}`)
      .toPromise()
      .then(res => {
        if (res.status === 200) {
          return;
        }
        return Promise.reject('not deleted');
      })
      .catch(err => {
        const errMsg = (err.message) ? err.message : err.status ? `${err.status} - ${err.statusText}` : 'Server error';
        console.error(errMsg);
        return Promise.reject(errMsg);
      });
  }
}
