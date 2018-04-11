import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AuthProvider } from '../../providers/auth/auth';
import { FoodViewPage } from '../food-view/food-view';
import { CategoryPage } from '../category/category';
import { CheckoutPage } from '../checkout/checkout';


/**
 * Generated class for the RestourantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-restourant',
  templateUrl: 'restourant.html',
})
export class RestourantPage {

  foods:any = [];
  food_path:string;
  restourant:any=[];
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
  restourant_id = this.navParams.get('restourant_id');
  
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
      return this.http.get( this.auth.api() + '/restourant-foods/' + this.restourant_id +'?token=' + this.auth.token() ).subscribe( (data) => {
        this.foods = data['data'];
        this.restourant = data['restourant'];
        this.food_path = data['food_path'];
        console.log('food ', this.foods , data , '| FOOD PATH ', this.food_path  );
        this.loading.dismissAll();
      });
  }
  goFoodview(id){
    this.loading.present();
    this.navCtrl.setRoot( FoodViewPage ,{id:id});
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
