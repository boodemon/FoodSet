import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController, AlertController} from 'ionic-angular';
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

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private auth:AuthProvider,
    private loader:LoadingController,
    private alertCtrl:AlertController
  ) {
    auth.online()
    //this.loading.present();
  }
  loading = this.loader.create({
    content:'Loading ...',
    dismissOnPageChange:true,

  });

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }
  goCreate(){
    this.loading.present();
    this.navCtrl.setRoot(CreateOrderPage);
  }

  goHistory(){
    this.loading.present();
    this.navCtrl.push( HistoryPage );
  }

  goTrack(){
    this.loading.present();
    this.navCtrl.push( TrackPage );
  }
  
  goProfile(){
    this.loading.present();
    this.navCtrl.push( ProfilePage );
  }
  
  goAbout(){
    this.loading.present();
  }

  goLogout() {
    let confirm = this.alertCtrl.create({
      title: 'Use Logout',
      message: 'Do you want to Logout?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.auth.logout();
            this.navCtrl.setRoot(LoginPage);
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  // goLogout(){
  //   this.auth.logout();
  //   this.navCtrl.setRoot( LoginPage );
  // }

}
