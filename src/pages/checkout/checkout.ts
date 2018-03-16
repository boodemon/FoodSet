import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController, Platform } from 'ionic-angular';
import { SQLiteObject } from '@ionic-native/sqlite';

// Provider include //
import { AuthProvider } from '../../providers/auth/auth';
import { QueryProvider } from '../../providers/query/query';
import { CategoryPage } from '../category/category';
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

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loader:LoadingController,
    public altCtrl:AlertController,
    public auth:AuthProvider,
    public qr:QueryProvider,
    public platform:Platform
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

  goContinue(){
    this.navCtrl.setRoot( CategoryPage );
  }

  goPayment(){

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
            this.lists.push( data.rows.item(i) );
          }
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

}
