import {View, Component} from 'angular2/angular2';
@Component({
  selector: 'startComponent'
})
@View({
  template: `
    <h2>Start</h2>
  `
})
export class Start {
  constructor() {
    console.error("Test");
  }
}
