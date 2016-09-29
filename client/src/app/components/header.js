import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  moduleId: __moduleName,
  template: `
    <header>
      <div>
        <a routerLink="/">Transport manager</a>
      </div>
      <div>
        <nav>
          <ul>
            <li *ngFor="let link of links">
              <a routerLink="{{link.url}}">{{link.label}}</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  `
})
export class HeaderComponent {
  links = [{
    label: 'Add new transport',
    url: '/add'
  }];
}
