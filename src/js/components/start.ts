import {View, Component} from 'angular2/angular2';
@Component({
  selector: 'startComponent'
})
@View({
  templateUrl: '../templates/components/start.html'
})
export class Start {
  constructor() {
    console.error('Test');
  }
}
