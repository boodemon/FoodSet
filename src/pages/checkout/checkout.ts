import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController, Platform } from 'ionic-angular';
import { SQLiteObject } from '@ionic-native/sqlite';
import { HttpClient } from '@angular/common/http';

// Provider include //
import { AuthProvider } from '../../providers/auth/auth';
import { QueryProvider } from '../../providers/query/query';
import { CategoryPage } from '../category/category';
import { TrackPage } from '../track/track';
/**
 * Generated class for the CheckoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {
  head:any = {};
  lists:any=[];
  res:string = '';
  total:number = 0;
  qtys:number =0;
  qtyModel:any=[];
  amountModel:any=[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loader:LoadingController,
    public alertCtrl:AlertController,
    public auth:AuthProvider,
    public qr:QueryProvider,
    public platform:Platform,
    private http:HttpClient
  ) {
    auth.online();
    this.platform.ready().then(() =>{
      //this.createTable();
    });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutPage');
    this.header();
    this.detail();
  }

  loading = this.loader.create({
    content: 'Loading ...',
    dismissOnPageChange: true,

  });

  goContinue(){
    this.navCtrl.setRoot( CategoryPage );
  }

  goPayment(){
    let confirm = this.alertCtrl.create({
      title: 'CHECKOUT CONFIRM',
      message: 'Please confirm to checkout ? ',
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
            this.recordOrder();
          }
        }
      ]
    });
    confirm.present();
  }
  recordOrder(){
    let param = {
        onHead : this.head,
        onList : this.lists,
        _method: 'POST',
        'token': this.auth.token
    };
    this.loading.present();
    this.http.post( this.auth.api() + '/order', param ).subscribe( (data) =>{
      this.loading.dismissAll();
      let alert = this.alertCtrl.create({
        title: 'SUCCESSFUL',
        subTitle: 'ทำการส่ง Order ไปยังเจ้าหน้าที่เรียบร้อยแล้ว และจะทำการติดต่อกลับเร็ว ๆ นี้',
        buttons: [
          {
            text: 'OK',
            handler: () => {
              this.clearOrder();
              this.navCtrl.setRoot(TrackPage );
            }
          }
        ]
      });
      alert.present();
    },
    (error) =>{
        alert('Error\nCannot record order please try again' + JSON.stringify(error));
        this.loading.dismissAll();
    })
    
  }
  calTotal( rows ){
    let total = 0;
    let qty   = 0;
    for(let i = 0; i < rows.length; i++){
      let item = rows[i];
      let quantity = this.qtyModel[i];
      let amount = parseFloat(item.price) * parseFloat( quantity );
      this.amountModel[i] = amount;
      total += amount;
      qty   += item.quantity;
    }
    this.total = total;
    this.qtys = qty;

  }
  calPrice(v){
    let total = 0;
    let qty = 0;
    let rows = this.lists;
    for (let i = 0; i < rows.length; i++) {
      let item = rows[i];
      let quantity = v == i ? this.qtyModel[v] : this.qtyModel[i];

      this.lists[i].quantity = quantity;
      this.qtys += quantity;
      let amount = parseFloat(item.price) * parseFloat(quantity);
      this.amountModel[i] = amount;
      total += amount;
      qty += item.quantity;
    }
    this.total = total;
    this.qtys = qty;
  }
  removeRow(id){
    let confirm = this.alertCtrl.create({
      title: 'DELETE CONFIRM',
      message: 'Please confirm to delete ? ',
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

          this.qr.db().then((db:SQLiteObject) =>{
            db.executeSql('DELETE FROM orderlist WHERE id=?',[id]).then((data) =>{
                this.detail();
                this.navCtrl.setRoot( CheckoutPage);
            },
            (error) =>{
              alert('Error!!\nCannot delete record this please try again.');
            })
          });
                }
              }
            ]
    });
    confirm.present();
  }
  // Qeury Header and order list //
  // ==================================================================================//
  createTable() {
    this.qr.db().then((db: SQLiteObject) => {
      db.executeSql('create table if not exists orders (id INTEGER PRIMARY KEY AUTOINCREMENT, userId INTEGER, userName TEXT, jobName TEXT, jobAddress TEXT, jobDate TEXT, jobTime TEXT, jobRemark TEXT, created_at TEXT, updated_at TEXT)', {})
        .then((data) => {
          // this.tb = 'Create table orders successful query is ' + JSON.stringify( data );
        }, (error) => {
          alert( 'Error can not create table orders' );
        });
    })
      .catch(e => alert( 'Error can not create database ' + JSON.stringify(e)) );
  }

  header(){
    this.qr.db().then((db:SQLiteObject) =>{
      db.executeSql("SELECT * FROM orders ORDER BY id DESC",{}).then((data) => {
        this.head = data.rows.item(0);
      },
      (error) => {
        alert('Error \nCannot read table' + JSON.stringify( error ) );
      })
    },
    (error) => {
      alert('Connot connect database' + JSON.stringify(error) );
    });
  }

  detail(){
    this.res = 'run detail order';
    this.qr.db().then((db:SQLiteObject) =>{
      db.executeSql("SELECT * FROM orderlist ORDER BY id ASC",{}).then((data) => {
        let len = data.rows.length;
        if( len > 0 ){
          for( let i = 0; i < len; i++ ){
            let item = data.rows.item(i);
            this.lists.push( item );
            this.qtyModel[i] = item.quantity
          }
          //alert('quantitn = ' + JSON.stringify( this.qtyModel ) );
          this.calTotal( this.lists );
        }
          //this.lists = data.rows;
        this.res += ' | orderlist table ' + JSON.stringify(this.lists );
        //  this.res += ' | orderlist table ' + JSON.stringify( data.rows );
      },
      (error) =>{
        alert('Cannot read table orderlist ' + JSON.stringify( error ) );
      });
    },(error) =>{
      alert('Cannot connect database ' + JSON.stringify( error ) );
    });
  }
  clearOrder(){
    this.qr.db().then((db: SQLiteObject) => {
      db.executeSql("DELETE FROM orders", {}).then((data) => {},
      (error) => { alert('Cannot read table orderlist ' + JSON.stringify(error)); });
    }, (error) => {
      alert('Cannot connect database ' + JSON.stringify(error));
    });
    this.qr.db().then((db: SQLiteObject) => {
      db.executeSql("DELETE FROM orderlist", {}).then((data) => {},
      (error) => { alert('Cannot read table orderlist ' + JSON.stringify(error)); });
    }, (error) => {
      alert('Cannot connect database ' + JSON.stringify(error));
    });
  }

}
