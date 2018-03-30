import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the ViewOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-order',
  templateUrl: 'view-order.html',
})
export class ViewOrderPage {
  order_id:number = this.navParams.get('order_id');
  head:any = [];
  details:any=[];
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private auth:AuthProvider,
    private http:HttpClient
  ) {
    this.auth.online();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewOrderPage');
    this.getOrder();
  }

  getOrder(){
      let param = '?token=' + this.auth.token();
      this.http.get( this.auth.api() + '/order/'+this.order_id + param ).subscribe((response) => {
        if( response['code'] == 200){
          this.head = response['head'];
          this.details = response['details'];
        }
      },
    (error) => {
        alert('Error!!\nCannot connect order' + JSON.stringify( error ));
    });
  }

  doClose(){
    this.navCtrl.pop();
  }

}
