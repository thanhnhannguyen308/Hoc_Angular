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
  showLineIf = true;
  color = 'red';
  cone = true;
  ctwo = true;
  public colors: string[] = ['red', 'green', 'blue'];
  style = 'italic';
  size = '30px';
  OnClick(value) {
    console.log(value);
    this.showLineIf = false;
    this.cone = !this.cone;
    this.ctwo = !this.ctwo;
  }
}
