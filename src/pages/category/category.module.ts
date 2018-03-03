import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoryPage } from './category';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    CategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(CategoryPage),
    HttpClientModule
  ],
})
export class CategoryPageModule {}
