import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'my-tutorial',
  template: `<h2>This is nguyen thanh nhan Component</h2>
    <h3 [class.redColor]="applyClass"> Apply Class </h3>
    <p>Child Components: {{ name }}</p>

    <Button [disabled]="voted" (click)="vote(true)">Agree</Button>
    <Button [disabled]="voted" (click)="vote(false)">DisAgree</Button>
    Result: {{ voted }}
    `,
  styles: [`h2: {color: red;}
  .redColor {color: blue;}
  `]
  // styleUrls: ['./app.component.css']
})

export class TutorialComponent {
  title = 'demo2';
  applyClass = false;
  @Input() name: string;
   // tslint:disable-next-line:no-output-on-prefix
  @Output() onVote = new EventEmitter<boolean>();

  voted = false;
  // setName(name: string) {
  //   this.name = name;
  // }

  vote(argee: boolean) {
    // this.voted = true;
    this.onVote.emit(argee);
  }
}
