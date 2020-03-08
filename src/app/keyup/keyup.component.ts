import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyup',
  template: `<input (keyup)="onKey($event)"><br/>
                <p>{{values}}</p>`,
  // templateUrl: './keyup.component.html',
  styleUrls: ['./keyup.component.css']
})
export class KeyupComponent implements OnInit {
  values = '';

  constructor() { }

  ngOnInit(): void { }

  onKey(event: any) {
    this.values = this.values + event.target.value + ' | ';
  }
}
