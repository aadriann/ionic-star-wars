import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CharacterDetailComponent } from '../character-detail/character-detail.component'
import { CHARACTERS } from '../../data/characters.data'
import { Character } from '../../interfaces/characters.interface'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePageComponent {
  characters: Character[];
  constructor(public navCtrl: NavController) {
    this.characters = CHARACTERS.slice(0);
  }

  characterDetail(character: any) {
    this.navCtrl.push(CharacterDetailComponent, { character });
  }
}
