// Importing default
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Importing additional required classes
import { Hero } from './hero';
// Importing HeroService
import { HeroService }  from './hero.service'

// Writing the @Component declaration that contains information about how this
// component can be imported, it properties and any other dependencies
@Component({
  selector: 'my-app',
	templateUrl: './app.component.html',
  providers: [HeroService],
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})
export class AppComponent implements OnInit {

  // Injecting the HeroService using a constructor. The constructor itself does
  // nothing, the parameter defines a private heroService property and
  // identifies it as an HeroService injection site
  constructor(private heroService: HeroService) { }

  // Creating a method to call and get the data
  getHeroes(): void {
    // Pass the callback function as an argument to the Promise's then() method:
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  // Adding OnInit and overriding method to call getHeroes()
  ngOnInit(): void {
    this.getHeroes();
  }

  title = "Tour of Heroes";
  heroes: Hero[];
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
