import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-me',
  template: `<button (click)="onClickMe()">Click me!</button><br/>
                    {{clickMessage}}`,
  styleUrls: ['./click-me.component.css']
})
export class ClickMeComponent implements OnInit {
  clickMessage = '';

  constructor() { }

  ngOnInit(): void { }

  onClickMe() {
    this.clickMessage = 'You are my hero!!!';
  }

}
