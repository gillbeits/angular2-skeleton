/*
 * Angular 2 decorators and services
 */
import {View, Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Http, Headers} from 'angular2/http';

import { StartComponent } from './components/start';

@Component({
  selector: 'app'
})
@View({
  directives: [ROUTER_DIRECTIVES],
  templateUrl: '../templates/app.html'
})
@RouteConfig([
  {
    path: '/',
    name: 'Root',
    component: StartComponent,
    useAsDefault: true
  }
])
export class AppComponent { }
