/* global dialogPolyfill */
import {Component, OnInit} from '@angular/core';
import {TransportService} from '../../services/services.js';

@Component({
  selector: 'app-list',
  moduleId: __moduleName,
  templateUrl: 'list.html'
})
/**
 * @extends {OnInit}
 */
export class ListComponent implements OnInit {
  transportModal = {}

  /**
   * @param {TransportService} service TransportService provider
   */
  constructor(service: TransportService) {
    this.service = service;
  }

  /**
   * When the component is initialized
   */
  ngOnInit() {
    this.transports = this.service.getTransports();
  }

  /**
   * Shows the confirm modal for the delete
   * @param {Object} transport Transport object to display
   */
  showModal(transport) {
    this.transportModal = transport;
    this.dialog = document.querySelector('dialog');
    if (!this.dialog.showModal) {
      dialogPolyfill.registerDialog(this.dialog);
    }
    this.dialog.showModal();
  }

  /**
   * Close the confirm modal
   */
  closeModal() {
    this.dialog.close();
  }

  /**
   * Calls the TransportService transport removal
   * @param {Object} transportModal Transport object to delete
   */
  delete(transportModal) {
    this.closeModal();
    this.service.deleteTransport(transportModal._id).then(() => {
      this.transports = this.service.getTransports();
    });
  }
}
