import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TransportService} from '../../services/services.js';
import {TransportObject} from '../../TransportObject.js';

@Component({
  selector: 'app-editor',
  moduleId: __moduleName,
  templateUrl: '../editor/editor.html'
})
/**
 * @extends {OnInit}
 */
export class EditComponent implements OnInit {
  title = 'Update transport';
  transport = new TransportObject();

  /**
   * @param {ActivatedRoute} route @angular/router.ActivatedRoute
   * @param {Router} router @angular/router.Router
   * @param {TransportService} service TransportService provider
   */
  constructor(route: ActivatedRoute, router: Router, service: TransportService) {
    this.route = route;
    this.router = router;
    this.service = service;
  }

  /**
   * Submit event send by child
   * @param {String} data JSON stringified of the transport object
   */
  onSubmit(data) {
    this.service.updateTransport(this.transport._id, data).then(() => {
      // Go back to the list when the transport is updated
      this.router.navigate(['/']);
    }).catch(err => alert(err));
  }

  /**
   * Reset event send by child
   */
  onReset() {
    this.transport = this.origTransport.clone();
  }

  /**
   * When the component is initialized
   */
  ngOnInit() {
    const id = this.route.snapshot.params.id;

    // Retrieves a transport by its ID
    this.service.getTransport(id).subscribe(transport => {
      // Clone the object to perform a reset
      this.origTransport = transport.clone();

      this.transport = transport;
    });
  }
}
