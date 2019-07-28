import { Component } from '@angular/core';
import { from } from 'rxjs';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form-view',
  templateUrl: './form.component.html',
  // template: 'Hello angular 2',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  title = 'demo2';
  onSubmit(value: any) {
    console.log(value);
  }
}
