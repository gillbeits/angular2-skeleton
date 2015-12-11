/*
 * Angular 2 decorators and services
 */
import {View, Component} from 'angular2/angular2';
import {RouteConfig} from 'angular2/router';
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
  templateUrl: '../templates/app.html'
})
@RouteConfig([
  { path: '/', component: Start }
])
export class AppComponent {

}
