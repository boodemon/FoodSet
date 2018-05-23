import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoodViewPage } from './food-view';
import { RatingViewPageModule} from '../rating-view/rating-view.module'
import { Ionic2RatingModule } from 'ionic2-rating';

@NgModule({
  declarations: [
    FoodViewPage,
  ],
  imports: [
    IonicPageModule.forChild(FoodViewPage),
    Ionic2RatingModule,
    RatingViewPageModule
  ],
})
export class FoodViewPageModule {}
