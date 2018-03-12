import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AuthProvider } from '../../providers/auth/auth';
import { FoodViewPage } from '../food-view/food-view';
import { CategoryPage } from '../category/category';

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
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private http: HttpClient,
    private auth: AuthProvider
    )
  {
    this.auth.online();
  }
  category_id = this.navParams.get('category_id');
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodPage');
    this.getFood();
  }

  getFood(){
      return this.http.get( this.auth.api() + '/foods/' + this.category_id +'?token=' + this.auth.token() ).subscribe( (data) => {
        this.foods = data['data'];
        this.food_path = data['food_path'];
        console.log('food ', this.foods , data , '| FOOD PATH ', this.food_path  );
      });
  }
  goFoodview(id){
    this.navCtrl.setRoot( FoodViewPage ,{id:id});
  }
  goCreate(){
    this.navCtrl.setRoot( CategoryPage );
  }
  img(img_name){
    
  }

}
