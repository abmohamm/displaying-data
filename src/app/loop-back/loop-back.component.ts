import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loop-back',
  /* template: `<input #box (keyup)="onKey(box.value)"><br/><p>{{ values }}</p>`,*/
  template: `<input #box (keyup.enter)="onEnter(box.value)"><br/><p *ngIf="value">Entered Value is : {{ value }}</p>`,
  // templateUrl: './loop-back.component.html',
  styleUrls: ['./loop-back.component.css']
})
export class LoopBackComponent implements OnInit {
  values = '';
  value = '';
  constructor() { }

  ngOnInit(): void { }

  onKey(value: any) {
      this.values = this.values + ' | ';
  }

  onEnter(value: any) {
      this.value = value;
  }


}
