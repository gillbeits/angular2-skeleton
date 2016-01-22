/*
 * Providers provided by Angular
 */
import {bootstrap}    from 'angular2/platform/browser'
import {APP_BASE_HREF, ROUTER_PROVIDERS} from 'angular2/router';

import {HTTP_PROVIDERS} from 'angular2/http';
/*
 * App Component
 * our top level component that holds all of our components
 */
import {AppComponent} from './app';
/*
 * Bootstrap our Angular app with a top level component `App` and inject
 * our Services and Providers into Angular's dependency injection
 */
bootstrap(AppComponent, [
  ROUTER_PROVIDERS
]);
