import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the FoodViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-food-view',
  templateUrl: 'food-view.html',
})
export class FoodViewPage {
  food_id:number = this.navParams.get('id');
  row:any = [];
  pricelist:any = [];

  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams,
      private http: HttpClient,
      private auth:AuthProvider
    ) 
  {
    this.auth.online();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodViewPage');
    this.getFood();
    this.prices();
  }

  getFood(){
    return this.http.get( this.auth.api() + '/food/' + this.food_id +'?token=' + this.auth.token() ).subscribe((response) =>{
      console.log( 'food response : ', response );
      if( response['code'] == 200){
        this.row = response['data'];
        console.log( 'row : ' , this.row );
      }
    })
  }
  prices(){
    return this.http.get(this.auth.api() + '/food-price/' + this.food_id + '?token=' + this.auth.token()).subscribe((response) => {
      console.log('food response : ', response);
      if (response['code'] == 200) {
        this.pricelist = response['data'];
        console.log('pricelist : ', this.pricelist);
      }
    })
  }

}
