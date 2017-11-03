import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CharacterDetailComponent } from './character-detail.component';

@NgModule({
  declarations: [
    CharacterDetailComponent,
  ],
  imports: [
    IonicPageModule.forChild(CharacterDetailComponent),
  ],
})
export class CharacterDetailModule {}
