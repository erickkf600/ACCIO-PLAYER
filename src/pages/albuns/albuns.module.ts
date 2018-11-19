import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlbunsPage } from './albuns';

@NgModule({
  declarations: [
    AlbunsPage,
  ],
  imports: [
    IonicPageModule.forChild(AlbunsPage),
  ],
})
export class AlbunsPageModule {}
