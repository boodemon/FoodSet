import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,ModalController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { ViewOrderPage } from '../view-order/view-order';
import { RatingPage } from '../rating/rating';


/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {

  frmFilter:FormGroup;
  result:string;
  orders:any = [];
  score:any=[];
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private form:FormBuilder,
    private auth:AuthProvider,
    private loader:LoadingController,
    private http:HttpClient,
    private pop: ModalController,
  ) {
    this.auth.online();
    this.frmFilter = this.form.group({
      'onStart': [this.defaultDate()],
      'onEnd': [this.defaultDate()],
      'token':['']
    })
  }
  defaultDate() {
    let deal = new Date();
    let setDate = deal.setDate(deal.getDate() );
    var d = new Date(setDate),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  currentDate() {
    let deal = new Date();
    return deal.setDate(deal.getDate());
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
    this.getTrack();
  }

  loading = this.loader.create({
    content: 'Loading ...',
    dismissOnPageChange: true,

  });

  getTrack() {
    this.loading.present();
    let param = '?token=' + this.auth.token() + '&status=finish';
    this.http.get(this.auth.api() + '/order' + param).subscribe((res) => {
      let code = res['code'];
      if (code == 200) {
        this.orders = res['data'];
        for(let i=0; i <= res['data'].length; i++){
          console.log( this.orders[i] );
          this.score[i] = 3.5;//this.orders[i].rating.score;
        }
        
        this.loading.dismissAll();
      } else {
        this.loading.dismissAll();
      }

    },
      (error) => {
        alert('Error!!\nCannot load order tracking' + JSON.stringify(error));
        this.loading.dismissAll();
      });
  }
  doFilter(){
    this.loading.present();
    let param = '?token=' + this.auth.token() 
                //+ '&status=finish'
                + '&onStart=' + this.frmFilter.get('onStart').value
                + '&onEnd=' + this.frmFilter.get('onEnd').value;
    this.http.get(this.auth.api() + '/order' + param).subscribe((res) => {
      let code = res['code'];
      console.log('tracking code = ' + code);
      console.log('tracking data = ', res['data']);
      if (code == 200) {
        this.orders = res['data'];
        this.loading.dismissAll();
      } else {
        this.loading.dismissAll();
      }

    },
    (error) => {
        alert('Error!!\nCannot load order tracking' + JSON.stringify(error));
        this.loading.dismissAll();
    });
  }

  viewOrder(id) {
    let view = this.pop.create(ViewOrderPage, { order_id: id });
    view.present();
  }
  modalRating(id){
    let view = this.pop.create(RatingPage, {order_id:id});
    view.present();
  }

}
