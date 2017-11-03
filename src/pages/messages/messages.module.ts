import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessagesComponent } from './messages.component';

@NgModule({
  declarations: [
    MessagesComponent,
  ],
  imports: [
    IonicPageModule.forChild(MessagesComponent),
  ],
})
export class MessagesModule {}
