/*
 * Providers provided by Angular
 */
import {bootstrap, ProviderBuilder, Type, FORM_PROVIDERS, ELEMENT_PROBE_PROVIDERS} from 'angular2/angular2';
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
bootstrap(<Type>AppComponent, [
  // These are dependencies of our App
  FORM_PROVIDERS,
  ROUTER_PROVIDERS,
  (new ProviderBuilder(APP_BASE_HREF)).toValue(location.pathname),
  HTTP_PROVIDERS,
  ELEMENT_PROBE_PROVIDERS
]);
