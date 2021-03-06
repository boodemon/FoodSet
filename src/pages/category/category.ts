import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AuthProvider } from '../../providers/auth/auth';
import { FoodPage } from '../food/food';
import { CreateOrderPage } from '../create-order/create-order';
import { CheckoutPage } from '../checkout/checkout';

/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {
  rows:any = [];
  img_path:string;
  constructor(
      public navCtrl: NavController, 
      public loading: LoadingController,
      public navParams: NavParams,
      private http:HttpClient ,
      private auth:AuthProvider
            ) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad CategoryPage');
    this.getCategory();
  }
  preload = this.loading.create({
    content: 'Loading...',
    dismissOnPageChange: true
  });

  getCategory(){
    this.preload.present();
    this.http.get( this.auth.api() + '/category?token=' + this.auth.token() ).subscribe((data) => {
      this.img_path = data['img_path'];
      this.rows = data['data'];
      console.log('data rows ', this.rows );
      this.preload.dismiss();
    },err =>{
    })
  }

  goFood(id){
    this.navCtrl.push(FoodPage,{category_id:id});
  }
  
  goCreate() {
    this.preload.present();
    this.navCtrl.setRoot(CreateOrderPage);
  }

  goCart() {
    this.preload.present();
    this.navCtrl.setRoot(CheckoutPage);
  }
}
