import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'my-tutorial',
  template: '<h2>This is nguyen thanh nhan Component</h2>',
  styles: ['h2 {color:red;};']
  // styleUrls: ['./app.component.css']
})

export class TutorialComponent {
  title = 'demo2';
}
