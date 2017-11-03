import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AudioComponent } from './audio.component';

@NgModule({
  declarations: [
    AudioComponent,
  ],
  imports: [
    IonicPageModule.forChild(AudioComponent),
  ],
})
export class AudioModule {}
