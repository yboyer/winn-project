// Transport object template
module.exports = class TransportObject {
  /** @param {Object} transport A JSON object to assign to the transport */
  constructor(transport) {
    this._departure = {
      point: {}
    };
    this._arrival = {
      point: {}
    };
    this._statutes = ['PROPOSED', 'CONFIRMED', 'RESERVED', 'CHECKEDIN', 'CHECKEDOUT'];

    if (transport !== undefined) {
      this._id = transport._id;
      this.title = transport.title;
      this.status = transport.status;
      this.departure = transport.departure;
      this.arrival = transport.arrival;
    }
  }

  /** @type {String[]} */
  get statutes() {
    return this._statutes.map(status => status);
  }

  /** @type {String} */
  get _id() {
    return this.__id;
  }
  /** @type {String} */
  set _id(id) {
    if (toType(id) !== 'string') {
      throw new Error('Property _id is not a valid string.');
    }
    this.__id = id;
  }

  /** @type {String} */
  get title() {
    return this._title;
  }
  /** @type {String} */
  set title(title) {
    if (toType(title) !== 'string') {
      throw new Error('Property title is not a valid string.');
    }
    this._title = title;
  }

  /** @type {String} */
  get status() {
    return this._status;
  }
  /** @type {String} */
  set status(status) {
    if (toType(status) !== 'string') {
      throw new Error('Property status is not a valid string.');
    }
    if (!this.statutes.includes(status)) {
      throw new Error('Property status is not a valid status code.');
    }
    this._status = status;
  }

  /** @type {Object} */
  get departure() {
    return this._departure;
  }
  /** @type {Object} */
  set departure(departure) {
    this._checkPoint(departure, 'departure');

    this._departure.date = departure.date;
    this._departure.point.lat = departure.point.lat;
    this._departure.point.lon = departure.point.lon;
  }

  /** @type {Object} */
  get arrival() {
    return this._arrival;
  }
  /** @type {Object} */
  set arrival(arrival) {
    this._checkPoint(arrival, 'departure');

    this._arrival.date = arrival.date;
    this._arrival.point.lat = arrival.point.lat;
    this._arrival.point.lon = arrival.point.lon;
  }

  /**
   * Checks the correct properties of the object
   * @param {Object} object Representation of point
   * @param {String} name Name of the representation
   */
  _checkPoint(object, name) {
    if (toType(object) !== 'object') {
      throw new Error(`Property ${name} is not a valid object.`);
    }
    if (toType(object.date) !== 'number') {
      throw new Error(`Property ${name}.date is not a valid number.`);
    }
    if (toType(object.point) !== 'object') {
      throw new Error(`Property ${name}.point is not a valid object.`);
    }
    if (toType(object.point.lat) !== 'number') {
      throw new Error(`Property ${name}.point.lat is not a valid number.`);
    }
    if (toType(object.point.lon) !== 'number') {
      throw new Error(`Property ${name}.point.lon is not a valid number.`);
    }
  }

  /**
   * Returns the JSON object of the transport
   * @return {Object} The object JSON of the transport
   */
  toJSON() {
    return {
      _id: this._id,
      title: this.title,
      status: this.status,
      departure: {
        date: this.departure.date,
        point: {
          lat: this.departure.point.lat,
          lon: this.departure.point.lon
        }
      },
      arrival: {
        date: this.arrival.date,
        point: {
          lat: this.arrival.point.lat,
          lon: this.arrival.point.lon
        }
      }
    };
  }

  /**
   * Returns a deep copy of the transport
   * @return {TransportObject} A deep copy of the transport
   */
  clone() {
    return new TransportObject(this.toJSON());
  }
};

function toType(obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}
