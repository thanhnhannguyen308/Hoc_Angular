import { Component } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: 'Hello angular 2',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo2';
  image = 'https://picsum.photos/200/300?grayscale';
  OnClick(value) {
    console.log(value);
  }
}
