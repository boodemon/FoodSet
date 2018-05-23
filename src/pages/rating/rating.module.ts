import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RatingPage } from './rating';
import { Ionic2RatingModule } from 'ionic2-rating';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    RatingPage,
  ],
  imports: [
    IonicPageModule.forChild(RatingPage),
    Ionic2RatingModule,
    ReactiveFormsModule,
    FormsModule
  ],
})
export class RatingPageModule {}
