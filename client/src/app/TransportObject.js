// Transport object template
export class TransportObject {
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

  get _id() {
    return this.__id;
  }
  set _id(id) {
    this.__id = id;
  }

  get title() {
    return this._title;
  }
  set title(title) {
    this._title = title;
  }

  get status() {
    return this._status;
  }
  set status(status) {
    this._status = status;
  }

  get departure() {
    return this._departure;
  }
  set departure(departure) {
    this._departure = departure;
  }

  get arrival() {
    return this._arrival;
  }
  set arrival(arrival) {
    this._arrival = arrival;
  }

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

  clone() {
    return new TransportObject(this.toJSON());
  }
}
