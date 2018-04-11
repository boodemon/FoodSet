import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AuthProvider } from '../../providers/auth/auth';
import { FoodViewPage } from '../food-view/food-view';
import { RestourantPage } from '../restourant/restourant'
import { CategoryPage } from '../category/category';
import { CheckoutPage } from '../checkout/checkout';

/**
 * Generated class for the FoodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-food',
  templateUrl: 'food.html',
})
export class FoodPage {
  foods:any = [];
  food_path:string;
  category:any=[];
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private http: HttpClient,
    private auth: AuthProvider,
    private loader: LoadingController
    )
  {
    this.auth.online();
  }
  category_id = this.navParams.get('category_id');
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodPage');
    this.getFood();
  }
  loading = this.loader.create({
    content: 'Loading...',
    dismissOnPageChange: true
  });

  getFood(){
      this.loading.present();
      return this.http.get( this.auth.api() + '/foods/' + this.category_id +'?token=' + this.auth.token() ).subscribe( (data) => {
        this.foods = data['data'];
        this.category = data['category'];
        this.food_path = data['food_path'];
        console.log('food ', this.foods , data , '| FOOD PATH ', this.food_path  );
        this.loading.dismissAll();
      });
  }
  goFoodview(id){
    this.loading.present();
    this.navCtrl.setRoot( FoodViewPage ,{id:id});
  }
  goShopview(id){
    this.loading.present();
    this.navCtrl.setRoot( RestourantPage ,{restourant_id:id});
  }
  goCreate(){
    this.loading.present();
    this.navCtrl.setRoot( CategoryPage );
  }

  goCart() {
    this.loading.present();
    this.navCtrl.setRoot( CheckoutPage );
  }

}
