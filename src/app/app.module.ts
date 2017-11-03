import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { TabsPageComponent, HomePageComponent, CharacterDetailComponent, AudioComponent, MessagesComponent } from '../pages/pages.module';

@NgModule({
  declarations: [
    MyApp,
    TabsPageComponent,
    HomePageComponent,
    CharacterDetailComponent,
    AudioComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPageComponent,
    HomePageComponent,
    CharacterDetailComponent,
    AudioComponent,
    MessagesComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
