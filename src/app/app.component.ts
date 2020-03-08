import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  /* template: `<h1>{{ title }}</h1>
             <h2>My Favorite Hero is : {{ myHero.name }}</h2>
             <p>Heroes: </p>
             <ul>
                  <li *ngFor="let hero of heroes">
                        {{ hero.name }}
                  </li>
             </ul>`, */
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Displaying-data';
  heroes = [  new Hero(1, 'Windstorm'),
              new Hero(13, 'Bombasto'),
              new Hero(15, 'Magneta'),
              new Hero(20, 'Tornado') ];
  myHero = this.heroes[0];
}
