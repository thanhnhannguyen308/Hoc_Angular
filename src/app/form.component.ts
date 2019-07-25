import { Component } from '@angular/core';
import { from } from 'rxjs';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form-view',
  templateUrl: './form.component.html',
  // template: 'Hello angular 2',
   styles: ['h1 { color: red;};']
})
export class FormComponent {
  title = 'demo2';
}
