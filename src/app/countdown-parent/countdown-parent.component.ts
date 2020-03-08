import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-parent',
  // templateUrl: './countdown-parent.component.html',
  template: `<h3>Countdown to Liftoff (via local variable)</h3>
             <button (click)="timer.start()">Start</button>
             <button (click)="timer.stop()">Stop</button>
             <div class="seconds">{{ timer.seconds }}</div>
             <app-countdown-child #timer ></app-countdown-child>`,
  styleUrls: ['./countdown-parent.component.css']
})
export class CountdownParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
