import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RatingViewPage } from './rating-view';
import { Ionic2RatingModule } from 'ionic2-rating';

@NgModule({
  declarations: [
    RatingViewPage,
  ],
  imports: [
    IonicPageModule.forChild(RatingViewPage),
    Ionic2RatingModule
  ],
})
export class RatingViewPageModule {}
