import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RestourantPage } from './restourant';

@NgModule({
  declarations: [
    RestourantPage,
  ],
  imports: [
    IonicPageModule.forChild(RestourantPage),
  ],
})
export class RestourantPageModule {}
