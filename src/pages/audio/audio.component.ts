import { Component } from '@angular/core'
import { NavController } from 'ionic-angular';
import { SONGS } from '../../data/song.data'
import { Song } from '../../interfaces/song.interface'


@Component({
  selector: 'page-audio',
  templateUrl: 'audio.html',
})

export class AudioComponent {

  songs: Song[];
  audio = new Audio();

  constructor(public navCtrl: NavController){
    this.songs = SONGS.splice(0);
  }

  play(song: Song) {
    for (let i = 0; i < this.songs.length; i++) {
        this.songs[i].reproducing = false;
    }
    song.reproducing = true;
    this.audio.src = song.audio;
    this.audio.load();
    this.audio.play();
  }

  pause(song: Song) {
    song.reproducing = false;
    this.audio.pause();
  }
}
