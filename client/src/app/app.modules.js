import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component.js';
import * as directives from './directives/directives.js';
import * as services from './services/services.js';
import * as components from './components/components.js';
import {RoutesModules} from './app.routes.js';

const getObjectValues = obj => Object.keys(obj).map(key => obj[key]);

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule,
    RoutesModules
  ],
  providers: [
    ...getObjectValues(services)
  ],
  declarations: [
    AppComponent,
    ...getObjectValues(directives),
    ...getObjectValues(components)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
