/*
 * Angular 2 decorators and services
 */
import {bootstrap, Directive, View, Component} from 'angular2/angular2';
import {RouteConfig, Router} from 'angular2/router';
import {Http, Headers} from 'angular2/http';
/*
 * Angular Directives
 */
import {ROUTER_DIRECTIVES} from 'angular2/router';

import { Start } from './components/start';

@Component({
    selector: 'app'
})
@View({
  directives: [ROUTER_DIRECTIVES],
  template: `
    <h1>My First Angular 2 App</h1>
    <router-outlet></router-outlet>
  `
})
@RouteConfig([
  { path: '/', component: Start }
])
export class AppComponent {

}
