import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-child',
  //  templateUrl: './hero-child.component.html',
  template: `<h3>{{ hero.name }} says : </h3>
             <p>I, {{ hero.name }}, at your service, {{ master }}</p>`,
  styleUrls: ['./hero-child.component.css']
})
export class HeroChildComponent implements OnInit {
  @Input() hero: Hero;
  @Input('master') master: string;

  constructor() { }

  ngOnInit(): void {
  }

}
