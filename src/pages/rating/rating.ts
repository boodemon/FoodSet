import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AuthProvider } from '../../providers/auth/auth';
import {FormGroup, FormBuilder,FormArray} from '@angular/forms';


/**
 * Generated class for the RatingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rating',
  templateUrl: 'rating.html',
})
export class RatingPage {

  order_id:number = this.navParams.get('order_id');
  items: any = {};
  ratings:any=[];
  head:any = [];
  score:any={};
  rate:object = [];
  comment:any={};
  details:any=[];

  private frmRate:FormGroup;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private auth:AuthProvider,
    private http:HttpClient,
    private frm:FormBuilder
  ) {
        this.auth.online();
        this.createFrom();
        //this.addItem();
        console.log( 'user ' + this.auth.user() );
  }
  users = this.auth.user();
  createFrom(){
    let user = JSON.parse( this.users );
    this.frmRate = this.frm.group({
        ratings: new FormArray([ this.createItem() ]),
        orderId: [this.order_id],
        username:[user.username],
        userId:[user.id],
        token: this.auth.token()

        //ratings:  this.createItem()
    });
    console.log( 'this frm rate => ', this.frmRate.get('ratings').value );
  }

  createItem() {
    return this.frm.group({
                score : '',
                comment : '',
                price_id: 0,
                detail_id:0,
                orderId: this.order_id
            });
  }

  addItem(): void {
    this.ratings = this.frmRate.get('ratings') as FormArray;
    this.ratings.push(this.createItem());
    console.log('addItem this ratings => ', this.ratings);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewOrderPage');
    this.getOrder();
    this.addItem();
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

  doRating(){
    let form = this.frmRate;
    console.log(form.value)
    let param = form.value;
    this.http.post( this.auth.api() + '/rating',param).subscribe((res) =>{
      console.log( 'result => ', res );
      if( res['code'] == 200){
        alert('Add score rating success full. Thank you');
        this.navCtrl.pop();
      }
    },
  (err) => {
    alert('Error ' + JSON.stringify( err ) );
  })
  }
}
