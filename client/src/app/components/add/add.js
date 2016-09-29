import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {TransportService} from '../../services/services.js';
import {TransportObject} from '../../TransportObject.js';

@Component({
  selector: 'app-editor',
  moduleId: __moduleName,
  templateUrl: '../editor/editor.html'
})
export class AddComponent {
  title = 'Add transport';
  transport = new TransportObject();

  /**
   * @param {Router} router @angular/router.Router client
   * @param {TransportService} service TransportService provider
   */
  constructor(router: Router, service: TransportService) {
    this.router = router;
    this.service = service;
  }

  /**
   * Submit event send by child
   * @param {String} data JSON stringified of the transprt object
   */
  onSubmit(data) {
    this.service.addTransport(data).then(() => {
      this.router.navigate(['/']);
    }).catch(err => alert(err));
  }

  /**
   * Reset event send by child
   */
  onReset() {
    this.transport = new TransportObject();
  }
}
