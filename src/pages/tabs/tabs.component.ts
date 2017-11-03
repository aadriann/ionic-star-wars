import { Component } from '@angular/core';
import { HomePageComponent, AudioComponent, MessagesComponent } from "../pages.module"

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPageComponent {
  tab1: any;
  tab2: any;
  tab3: any;

  constructor() {
    this.tab1 = HomePageComponent;
    this.tab2 = AudioComponent;
    this.tab3 = MessagesComponent;
  }

}
