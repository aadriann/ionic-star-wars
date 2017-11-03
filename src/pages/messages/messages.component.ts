import { Component } from '@angular/core'
import { NavController } from 'ionic-angular';
import { CHARACTERS } from '../../data/characters.data'
import { Character } from '../../interfaces/characters.interface'


@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html',
})

export class MessagesComponent {
  characters: Character[];
  constructor(public navCtrl: NavController){
    this.characters = CHARACTERS.splice(0);
  }
}
