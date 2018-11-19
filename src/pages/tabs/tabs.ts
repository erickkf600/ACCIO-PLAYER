import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { IonicPage } from 'ionic-angular';
import { ArtistaPage } from '../artista/artista';
import { AlbunsPage } from '../albuns/albuns';
@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ArtistaPage;
  tab3Root = AlbunsPage;

  constructor() {

  }
}
