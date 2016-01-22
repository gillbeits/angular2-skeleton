import {View, Component} from 'angular2/core';
@Component({
  selector: 'startComponent'
})
@View({
  templateUrl: '../templates/components/start.html'
})
export class StartComponent {
  constructor() {
    console.error('Test');
  }
}
