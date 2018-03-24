import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,ModalController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

import { AuthProvider } from '../../providers/auth/auth';
import { PaymentPage } from '../payment/payment'

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

  getTrack(){
    let param = '?token=' + this.auth.token() + '&status=new';
    this.http.get( this.auth.api() + '/order' + param ).subscribe((res) => {
      let code = res['code'];
      console.log('tracking code = ' + code );
      console.log('tracking data = ', res['data']);
      if( code == 200 ){
        this.orders = res['data'];
      }
    },
    (error) => {
      alert('Error!!\nCannot load order tracking' + JSON.stringify( error ) );
    });
  }
  paid = this.pop.create( PaymentPage );
  
  doConfirmation(id){
    this.paid.present();
  }
  doDimis() {
    this.paid.dismiss();
  }

  viewOrder(id){

  }

}
