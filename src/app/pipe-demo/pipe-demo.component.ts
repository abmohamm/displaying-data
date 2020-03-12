import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  //  templateUrl: './pipe-demo.component.html',
  template: `<p>The hero's birthday is {{ birthday | date: 'fullDate' | uppercase }}</p>`,
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

  birthday = new Date(1988, 3, 15); // April 15, 1988

  constructor() { }

  ngOnInit(): void { }

}
