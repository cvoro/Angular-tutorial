import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';




@Component({
  selector: 'my-heroes',
  templateUrl: './hero.component.html',
  styleUrls: ['../app.component.css'],
  providers: [HeroService]
})
export class HeroesComponent {
  heroes: Hero[];
  selectedHero: Hero;
  title = 'Tour of Heroes';
   constructor(private heroService: HeroService) { }
  // hero: Hero = {
  //  id: 1,
  //    name: 'Windstrom',
  // };
   getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
  this.selectedHero = hero;
}

}


