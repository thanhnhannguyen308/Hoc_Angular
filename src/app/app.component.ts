import { Component, ViewChild } from '@angular/core';
import { TutorialComponent } from './tutorial.component';
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
  agree = 0;
  disagree = 0;

  // @ViewChild(TutorialComponent)
  // private tutorialComponent: TutorialComponent;

  parentVote(argee: boolean) {
    if (argee) {
      this.agree++;
    } else {
      this.disagree++;
    }
  }

  OnClick(value) {
    console.log(value);
    this.showLineIf = false;
    this.cone = !this.cone;
    this.ctwo = !this.ctwo;
  }
}
