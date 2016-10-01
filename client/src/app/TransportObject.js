// Transport object template
export class TransportObject {
  /** @param {Object} transport A JSON object to assign to the transport */
  constructor(transport) {
    this.departure = {
      point: {}
    };
    this.arrival = {
      point: {}
    };

    if (transport !== undefined) {
      this._id = transport._id;
      this.title = transport.title;
      this.status = transport.status;
      this.departure = transport.departure;
      this.arrival = transport.arrival;
    }
  }

  /** @type {String} */
  get _id() {
    return this.__id;
  }
  /** @type {String} */
  set _id(id) {
    this.__id = id;
  }

  /** @type {String} */
  get title() {
    return this._title;
  }
  /** @type {String} */
  set title(title) {
    this._title = title;
  }

  /** @type {String} */
  get status() {
    return this._status;
  }
  /** @type {String} */
  set status(status) {
    this._status = status;
  }

  /** @type {Object} */
  get departure() {
    return this._departure;
  }
  /** @type {Object} */
  set departure(departure) {
    this._departure = departure;
  }

  /** @type {Object} */
  get arrival() {
    return this._arrival;
  }
  /** @type {Object} */
  set arrival(arrival) {
    this._arrival = arrival;
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
}
