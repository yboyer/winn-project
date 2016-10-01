/* global componentHandler, Pikaday */
import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-form',
  moduleId: __moduleName,
  templateUrl: 'form.html'
})
/**
 * @extends {OnInit}
 */
export class FormComponent implements OnInit {
  _isInitialized = false;
  _needsUpdate = false;

  // Title send by the parent
  @Input() title;
  // Use the onSubmit function of the parent
  @Output() onSubmit = new EventEmitter();
  // Use the onReset function of the parent
  @Output() onReset = new EventEmitter();
  // Transport object send by the parent
  @Input()
  set transport(transport) {
    this._transport = transport;

    if (transport.title !== undefined) {
      if (this._isInitialized) {
        this.updateTransportDate();
      } else {
        this._needsUpdate = true;
      }
    }
    this.updateMaterialElements();
  }
  get transport() {
    return this._transport;
  }

  /**
   * Updates the status of the transport
   * @param {String} status New status of the transport
   */
  updateStatus(status) {
    this.transport.status = status;
    this.updateMaterialElements();
  }

  /**
   * Updates the material elements of the DOM
   */
  updateMaterialElements() {
    setTimeout(() => {
      componentHandler.downgradeElements(document.querySelectorAll('[material]:not([no-mdl-update])'));
      for (const el of document.querySelectorAll('[material]')) {
        setTimeout(() => componentHandler.upgradeElement(el));
      }
    });
  }

  /**
   * When the component is initialized
   */
  ngOnInit() {
    this.statutes = ['PROPOSED', 'CONFIRMED', 'RESERVED', 'CHECKEDIN', 'CHECKEDOUT'];
    // Set up the departure date picker
    this.departureInput = document.querySelector('#departure_input');
    this.departurePik = new Pikaday({
      field: this.departureInput,
      firstDay: 1,
      use24hour: true,
      autoClose: false,
      timeLabel: 'at',
      onSelect: date => {
        // Update the material element
        if (!this.departureInput.inited) {
          componentHandler.downgradeElements(this.departureInput.parentElement);
          setTimeout(() => componentHandler.upgradeElement(this.departureInput.parentElement));
          this.departureInput.inited = true;
        }
        this.transport.departure.date = date.getTime();

        // Set the min arrival date in relation of the departure date
        this.arrivalPik.setMinDate(date);
        // Reset the arrival date
        if (this.transport.arrival.date && this.transport.arrival.date < this.transport.departure.date) {
          this.transport.arrival.date = this.transport.departure.date;
          this.updateTransportDate();
        }
      }
    });

    // Set up the arrival date picker
    this.arrivalInput = document.querySelector('#arrival_input');
    this.arrivalPik = new Pikaday({
      field: this.arrivalInput,
      firstDay: 1,
      use24hour: true,
      autoClose: false,
      timeLabel: 'at',
      onSelect: date => {
        // Update the material element
        if (!this.arrivalInput.inited) {
          componentHandler.downgradeElements(this.arrivalInput.parentElement);
          setTimeout(() => componentHandler.upgradeElement(this.arrivalInput.parentElement));
          this.arrivalInput.inited = true;
        }
        this.transport.arrival.date = date.getTime();
      }
    });

    this.updateMaterialElements();

    // If the transport object as been send before the initialization
    if (this._needsUpdate) {
      this.updateTransportDate();
    }
    this._isInitialized = true;
  }

  /**
   * Updates the date pikers
   */
  updateTransportDate() {
    const departureDate = new Date(this.transport.departure.date);
    this.departurePik.setDate(departureDate);
    this.transport.departure.readableDate = departureDate.toDDMMYYHHMM();

    const arrivalDate = new Date(this.transport.arrival.date);
    this.arrivalPik.setDate(arrivalDate);
    this.transport.arrival.readableDate = departureDate.toDDMMYYHHMM();
  }

  /**
   * Submit function of the form
   * @param {Object} form The form object
   */
  submit(form) {
    if (!form.valid) {
      return;
    }

    const data = JSON.stringify(this.transport.toJSON());

    this.onSubmit.emit(data);
  }

  /**
   * Reset function of the form
   */
  reset() {
    this.arrivalInput.value = '';
    this.departureInput.value = '';
    this.onReset.emit();
    setTimeout(() => {
      this.updateMaterialElements();
    });
  }

  /**
   * Cancel function of the form: returns to the last page seen
   */
  cancel() {
    history.back();
  }
}
