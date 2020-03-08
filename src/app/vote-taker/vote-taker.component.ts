import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote-taker',
  //  templateUrl: './vote-taker.component.html',
  template: `<h2>Should mankind colonize the universe</h2>
             <h3>Agree: {{ agreed }}, Disagree: {{ disagreed }}</h3>
             <app-voter *ngFor="let voter of voters"
                        [name]="voter"
                        (voted)="onVoted($event)"></app-voter>`,
  styleUrls: ['./vote-taker.component.css']
})
export class VoteTakerComponent implements OnInit {
  agreed = 0;
  disagreed = 0;
  voters = ['Narco', 'Celeritas', 'Bombasto'];

  constructor() { }

  ngOnInit(): void { }

  onVoted(agreed: boolean) {
      agreed ? this.agreed++ : this.disagreed++;
  }

}
