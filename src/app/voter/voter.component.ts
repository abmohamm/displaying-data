import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-voter',
  //  templateUrl: './voter.component.html',
  template: `<h4>{{ name }}</h4>
             <button (click)="vote(true)" [disabled]="didVote">Agree</button>
             <button (click)="vote(false)" [disabled]="didVote">Disagree</button>`,
  styleUrls: ['./voter.component.css']
})
export class VoterComponent implements OnInit {
  @Input() name: string;
  @Output() voted = new EventEmitter<boolean>();
  didVote = false;

  constructor() { }

  ngOnInit(): void { }

  vote(agreed: boolean) {
      this.voted.emit(agreed);
      this.didVote = true;
  }

}
