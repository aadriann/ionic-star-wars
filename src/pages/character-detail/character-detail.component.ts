import { Component } from '@angular/core'
import { NavParams } from "ionic-angular"
import { Character } from '../../interfaces/characters.interface'

@Component({
  selector: 'character-detail',
  templateUrl: 'character-detail.html',
})

export class CharacterDetailComponent {
  character:Character;
  constructor(public navParams:NavParams){
    this.character = navParams.get('character');
    console.log(this.character);
  }

}
