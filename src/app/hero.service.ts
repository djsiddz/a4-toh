import { Injectable } from '@angular/core';

import { Hero } from './hero';
// Importing the mock HEROES and returning it from the getHeroes() method
import { HEROES } from './mock-heroes';

@Injectable ()

export class HeroService {
  getHeroes(): Hero[] {
    return HEROES;
  }
}
