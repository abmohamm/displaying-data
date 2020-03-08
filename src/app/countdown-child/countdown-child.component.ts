import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-countdown-child',
  // templateUrl: './countdown-child.component.html',
  template: `<p>{{ message }}</p>`,
  styleUrls: ['./countdown-child.component.css']
})
export class CountdownChildComponent implements OnInit, OnDestroy {

  intervalId = 0;
  message = '';
  seconds = 11;

  constructor() { }

  ngOnInit(): void {
    this.start();
  }

  ngOnDestroy(): void {
    this.clearTimer();
  }

  start() {
    this.countDown();
    this.intervalId = window.setInterval(() => {
        this.seconds -= 1;
        if ( this.seconds === 0 ) {
            this.message = 'Blast Off !!!';
        } else {
            if ( this.seconds < 0 ) {
              this.seconds = 10;
            }
            this.message = `T-${this.seconds} seconds and counting`;
        }
    }, 1000);
  }

  stop()  {
    this.clearTimer();
    this.message = `Holding at T-${this.seconds} seconds`;
  }

  private countDown() {
      this.clearTimer();
  }

  clearTimer() {
    clearInterval(this.intervalId);
  }

}
