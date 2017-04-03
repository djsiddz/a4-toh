// Keep the Input import for now, you'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
// The new HeroDetailComponent should take the id parameter from the params
//   Observable in the ActivatedRoute service and use the HeroService to fetch
//   the hero with that id.
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

// Importing switchMap for use with Observable
import 'rxjs/add/operator/switchMap';

import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap( (params: Params) => this.heroService.getHero(+params['id']) )
      .subscribe(hero => this.hero = hero)
  }

  goBack(): void {
    this.location.back();
  }

  @Input() hero: Hero;
}
