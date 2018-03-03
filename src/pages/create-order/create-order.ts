import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { CategoryPage } from '../category/category';
/**
 * Generated class for the CreateOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-order',
  templateUrl: 'create-order.html',
})
export class CreateOrderPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateOrderPage');
  }

  goDashboard(){
    this.navCtrl.push( DashboardPage );
  }

  goCategory(){
    this.navCtrl.push( CategoryPage );
  }
}
