import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateOrderPage } from './create-order';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CreateOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateOrderPage),
    FormsModule
  ],
})
export class CreateOrderPageModule {}
