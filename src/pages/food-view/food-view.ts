import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { FoodPage } from '../food/food';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { FormBuilder, Validators,FormGroup} from '@angular/forms';
// Provider include //
import { AuthProvider } from '../../providers/auth/auth';
import { QueryProvider } from '../../providers/query/query';


/**
 * Generated class for the FoodViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-food-view',
  templateUrl: 'food-view.html',
})
export class FoodViewPage {
  food_id:number = this.navParams.get('id');
  item:any = [];
  row:any = [];
  pricelist:any = [];
  orderlist:Array<Object>;
  txtres:string;
  restourant:string;
  cart:FormGroup;
  action:string = 'new';
  private table:string = 'orderlist';
  private user = JSON.parse( localStorage.getItem('user') );
  public price:number;
  public amount:number;
  
  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams,
      private http: HttpClient,
      private auth:AuthProvider,
      private sqlite:SQLite,
      private platform:Platform,
      private loader:LoadingController,
      private frm: FormBuilder,
      private qr: QueryProvider
    ) 
  {
    this.auth.online();
    this.createForm();
    
    this.platform.ready().then(()=>{
      this.createTable();
    });
    
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodViewPage');
    this.getFood();
    this.prices();
  }
  createForm() {
    this.cart = this.frm.group({
      'userId': [this.user.id],
      'userName': [this.user.name],
      'price_id': ['', Validators.required],
      'category_id': [''],
      'food_id': [''],
      'food_name': [''],
      'restourant_id': [''],
      'restourant_name': [''],
      'quantity': [1, Validators.required],
      'price': [''],
      'amount': [''],
      'remark': ['']
    });
  }
  
  loading = this.loader.create({
    content: 'Loading...',
    dismissOnPageChange: true
  });
  

  getFood(){
    this.loading.present();
    return this.http.get( this.auth.api() + '/food/' + this.food_id +'?token=' + this.auth.token() ).subscribe((response) =>{
      console.log( 'food response : ', response );
      if( response['code'] == 200){
          this.row = response['data'];
          let json = this.row;
        this.cart.get('category_id').setValue(json['category_id']);
        this.cart.get('food_id').setValue(json['id']);
        this.cart.get('food_name').setValue(json['food_name']);
      }
      this.loading.dismissAll();
    })
  }
  
  prices(){
    return this.http.get(this.auth.api() + '/food-price/' + this.food_id + '?token=' + this.auth.token()).subscribe((response) => {
      if (response['code'] == 200) {
        this.pricelist  = response['data'];
        let json = response['data'][0];
        this.restourant = json['id'];
        this.cart.get('price_id').setValue(json['id']);
        this.cart.get('restourant_id').setValue(json['restourant_id']);
        this.cart.get('restourant_name').setValue(json['restourant']);
        this.cart.get('price').setValue(json['price']);
        this.price = json['price'];
        this.amount = json['price'];
        //alert('pricelist : ' + this.restourant);
      }
    })
  }

  goFood(id){
    this.loading.present();
    this.navCtrl.setRoot( FoodPage, {category_id:id});
  }
  doQuantity(){
    let qty = this.cart.get('quantity').value;
    let price = this.cart.get('price').value;
    let amount = price * qty;
    this.amount = amount;
    this.cart.get('amount').setValue( amount );
  }
  doPrice(){
    let json = this.pricelist[0];
    this.restourant = json['id'];
    this.cart.get('restourant_id').setValue(json['restourant_id']);
    this.cart.get('restourant_name').setValue(json['restourant']);
    this.cart.get('price').setValue(json['price']);
    let qty = this.cart.get('quantity').value;
    this.price = json['price'];
    this.amount = json['price'] * qty;
    this.cart.get('amount').setValue( this.amount );

  }

  doCart(){
    alert('comming soon...');
  }

  currentDate() {
    let deal = new Date();
    return deal.setDate(deal.getDate());
  }
  // Manage SQLite 
  /* ======================================================================================== */
  createTable(){
    this.qr.db().then((db:SQLiteObject) =>{
      db.executeSql("CREATE TABLE IF NOT EXISTS " + this.table +" (id INTEGER PRIMARY KEY AUTOINCREMENT, userId INTEGER, userName TEXT, price_id INTEGER, category_id INTEGER, food_id INTEGER, food_name TEXT, restourant_id INTEGER, restourant_name TEXT, quantity INTEGER, price DOUBLE, amount DOUBLE, remark TEXT, created_at TEXT, updated_at TEXT)",{}).then(
        (data) =>{
          this.txtres = 'Create table orderlist ready';
        },(error) => {
          this.txtres = 'Error cannot Create Table ' + JSON.stringify(error);
        });
    },
    (error) => {
        this.txtres = 'Error cannot Create Database ' + JSON.stringify( error );
    });
  }

  insertRecord(){
    this.qr.db().then((db:SQLiteObject) =>{
      db.executeSql('INSERT INTO ' + this.table +' (userId, userName, price_id, category_id, food_id, food_name, restourant_id, restourant_name, quantity, price, amount, food_remark, created_at) VALUE (?,?,?,?,?,?,?,?,?,?,?,?,?)', [ 
        this.cart.get('userId'),
        this.cart.get('userName'), 
        this.cart.get('price_id').value,
        this.cart.get('category_id').value, 
        this.cart.get('food_id').value, 
        this.cart.get('food_name'),
        this.cart.get('restourant_id'),
        this.cart.get('restourant_name'),
        this.cart.get('quantity'),
        this.cart.get('price'),
        this.cart.get('amount'),
        this.cart.get('remark'),
        this.currentDate(),
        ]).then((data) => {

        },
        (error) => {
            alert('Error \nCannot insert record');
        });
    },(error) => {
        alert('Error \n' + JSON.stringify(error));
    });
  }


}
