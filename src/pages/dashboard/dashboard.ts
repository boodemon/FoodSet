import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CreateOrderPage } from '../create-order/create-order';
import { HistoryPage } from '../../pages/history/history';
import { TrackPage } from '../track/track';
import { ProfilePage } from '../profile/profile';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard', 
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth:AuthProvider) {
    auth.online()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }
  goCreate(){
    this.navCtrl.setRoot(CreateOrderPage);
  }

  goHistory(){
    this.navCtrl.push( HistoryPage );
  }

  goTrack(){
    this.navCtrl.push( TrackPage );
  }
  
  goProfile(){
    this.navCtrl.push( ProfilePage );
  }
  
  goAbout(){
    this.navCtrl.push( ProfilePage );
  }
  
  goLogout(){
    this.auth.logout();
    this.navCtrl.setRoot( LoginPage );
  }

}
