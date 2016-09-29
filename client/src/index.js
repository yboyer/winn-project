import 'core-js/client/shim';
import 'zone.js/dist/zone';

import '@angular/common';
import 'rxjs';
import './tools.js';
import './ignore/dialog-polyfill/dialog-polyfill.js';
import './ignore/material/material.js';
import './ignore/pikaday.js';

import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app/app.modules.js';

import {production} from '@system-env';

if (production) {
  enableProdMode();
} else {
  Error['stackTraceLimit'] = Infinity; // eslint-disable-line dot-notation
  System.import('zone.js/dist/long-stack-trace-zone');
}

platformBrowserDynamic().bootstrapModule(AppModule);
