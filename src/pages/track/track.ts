import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,ModalController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

import { AuthProvider } from '../../providers/auth/auth';
import { PaymentPage } from '../payment/payment';
import { ViewOrderPage } from '../view-order/view-order';
import { DashboardPage } from '../dashboard/dashboard';

/**
 * Generated class for the TrackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-track',
  templateUrl: 'track.html',
})
export class TrackPage {
  orders:any = [];
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private http: HttpClient,
    private pop: ModalController,
    private loader: LoadingController,
    private auth: AuthProvider
  ) {
    this.auth.online();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrackPage');
    this.getTrack();
  }
  loading = this.loader.create({
    content: 'Loading ...',
    dismissOnPageChange: true,

  });

  getTrack(){
    this.loading.present();
    let param = '?token=' + this.auth.token() + '&status=processing';
    this.http.get( this.auth.api() + '/order' + param ).subscribe((res) => {
      let code = res['code'];
      console.log('tracking code = ' + code );
      console.log('tracking data = ', res['data']);
      if( code == 200 ){
        this.orders = res['data'];
        this.loading.dismissAll();
      }else{ 
         this.loading.dismissAll();
      }
     
    },
    (error) => {
      alert('Error!!\nCannot load order tracking' + JSON.stringify( error ) );
      this.loading.dismissAll();
    });
  }
  
  doConfirmation(id){
    let paid = this.pop.create( PaymentPage ,{order_id:id});
    paid.present();
  }

  viewOrder(id){
    let view = this.pop.create( ViewOrderPage ,{order_id:id});
    view.present();
  }
  goHome(){
    this.navCtrl.setRoot( DashboardPage );
  }

}
