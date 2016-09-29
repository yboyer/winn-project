/* global google */
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-map',
  moduleId: __moduleName,
  template: ''
})
/**
 * @extends {OnInit}
 */
export class MapComponent implements OnInit {
  mapFitted = false;
  isInitialized = false;
  needsUpdate = false;

  @Input()
  set transport(transport) {
    this._transport = transport;

    if (this.isInitialized) {
      this.updateMarkers();
    } else {
      this.needsUpdate = true;
    }
  }
  get transport() {
    return this._transport;
  }

  /**
   * When the component is initialized
   */
  ngOnInit() {
    if (!window.google) {
      return;
    }
    this.map = new google.maps.Map(document.querySelector('app-map'), {
      center: {lat: 0, lng: 0},
      zoom: 8
    });
    this.map.fitBounds(new google.maps.LatLngBounds({lat: 60, lng: -150}, {lat: -60, lng: 150}));

    this.map.addListener('click', e => {
      if (this.departureMarker === undefined) {
        this.transport.departure.point = {
          lat: e.latLng.lat(),
          lon: e.latLng.lng()
        };

        this.updateMarkers();
      } else if (this.arrivalMarker === undefined) {
        this.transport.arrival.point = {
          lat: e.latLng.lat(),
          lon: e.latLng.lng()
        };

        this.updateMarkers();
      }
    });

    if (this.needsUpdate) {
      this.updateMarkers();
    }

    this.isInitialized = true;
  }

  /**
   * Updates the markers position and visibility on the map
   */
  updateMarkers() {
    const latlngs = [
      {lat: this.transport.departure.point.lat, lng: this.transport.departure.point.lon},
      {lat: this.transport.arrival.point.lat, lng: this.transport.arrival.point.lon}
    ];

    // Remove markers if the transport points are empty
    if (!latlngs[0].lat) {
      if (this.departureMarker) {
        this.departureMarker.setMap(null);
        this.departureMarker = undefined;
      }

      if (this.arrivalMarker) {
        this.arrivalMarker.setMap(null);
        this.arrivalMarker = undefined;
      }

      if (this.polyPath) {
        this.polyPath.setMap(null);
        this.polyPath = undefined;
      }
    }

    // Refresh the red line between markers
    const updatePolyline = () => {
      this.polyPath.setPath([this.departureMarker.position, this.arrivalMarker.position]);

      this.transport.departure.point.lat = this.departureMarker.position.lat();
      this.transport.departure.point.lon = this.departureMarker.position.lng();
      this.transport.arrival.point.lat = this.arrivalMarker.position.lat();
      this.transport.arrival.point.lon = this.arrivalMarker.position.lng();
    };

    if (this.polyPath === undefined) {
      // Config of departure marker
      if (this.departureMarker === undefined && latlngs[0].lat) {
        this.departureMarker = new google.maps.Marker({
          map: this.map,
          position: latlngs[0],
          draggable: true,
          icon: 'assets/departure.png',
          animation: google.maps.Animation.DROP,
          title: 'Departure'
        });
      }

      // Config of arrival marker
      if (this.arrivalMarker === undefined && latlngs[1].lat) {
        this.arrivalMarker = new google.maps.Marker({
          map: this.map,
          position: latlngs[1],
          draggable: true,
          icon: 'assets/arrival.png',
          animation: google.maps.Animation.DROP,
          title: 'Arrival'
        });
      }

      if (this.departureMarker && this.arrivalMarker) {
        // Red line between markers
        this.polyPath = new google.maps.Polyline({
          map: this.map,
          path: [this.departureMarker.position, this.arrivalMarker.position],
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });
        // Update line when markers are moved
        this.departureMarker.addListener('drag', updatePolyline.bind(this));
        this.arrivalMarker.addListener('drag', updatePolyline.bind(this));
      }
    } else {
      // Update markers and line
      this.departureMarker.setPosition(latlngs[0]);
      this.arrivalMarker.setPosition(latlngs[1]);

      updatePolyline();
    }

    // Fit map once
    if (!this.mapFitted && this.polyPath) {
      this.map.fitBounds(
          new google.maps.LatLngBounds()
          .extend(this.departureMarker.position)
          .extend(this.arrivalMarker.position)
        );
      this.mapFitted = true;
    }
  }

}
