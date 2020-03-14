import { Component, OnInit } from '@angular/core';
import { HeroTemplate } from '../hero-template';

@Component({
  selector: 'app-template-driven-demo',
  templateUrl: './template-driven-demo.component.html',
  styleUrls: ['./template-driven-demo.component.css']
})
export class TemplateDrivenDemoComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  hero = new HeroTemplate(1, '', this.powers[0], 'Chuck Overstreet');
  submitted = false;

  constructor() { }

  ngOnInit(): void {}

  onSubmit(event: any) {
    this.submitted = true;
    console.log('Input Data : ' + JSON.stringify(event.value));
  }

  getDiagnostic() {
    return JSON.stringify(this.hero);
  }

  newHero() {
    this.hero = new HeroTemplate(2, '', this.powers[1], 'Ballistic Pendulum');
  }

}
