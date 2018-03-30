import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { SQLiteObject } from '@ionic-native/sqlite';
import { FormBuilder, Validators,FormGroup} from '@angular/forms';
// Page //
import { FoodPage } from '../food/food';
import { CheckoutPage } from '../checkout/checkout';

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
  arrprice:any = [];
  private table:string = 'orderlist';
  private user = JSON.parse( localStorage.getItem('user') );
  public price:number;
  public amount:number;
  
  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams,
      private http: HttpClient,
      private auth:AuthProvider,
      private loader:LoadingController,
      private frm: FormBuilder,
      private qr: QueryProvider
    ) 
  {
    this.auth.online();
    this.createForm();
    
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodViewPage');
    //this.checkRecord();
    this.getFood();
    this.prices();
  }
  createForm() {
    this.cart = this.frm.group({
      'userId': [this.user.id],
      'userName': [this.user.username],
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
    this.checkRecord();
    return this.http.get( this.auth.api() + '/food/' + this.food_id +'?token=' + this.auth.token() ).subscribe((response) =>{
      console.log( 'food response : ', response );
      if( response['code'] == 200){
          this.row = response['data'];
          let json = this.row;
          if( this.action == 'new'){
              this.cart.get('category_id').setValue(json['category_id']);
              this.cart.get('food_id').setValue(json['id']);
              this.cart.get('food_name').setValue(json['food_name']);
          }
      }
      this.loading.dismissAll();
    })
  }
  
  prices(){
    this.loading.present();
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
        for (let i = 0; i <= ( response['data'].length - 1 ); i++) {
          if (response['data'][i] !== null && response['data'][i] !== '')
          this.arrprice[ response['data'][i]['id'] ] = response['data'][i];
        }
        //this.txtres = JSON.stringify( this.arrprice );
        //alert('pricelist : ' + this.restourant);
      }
      this.loading.dismissAll();
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
  doPrice(json){
    this.restourant = json.id;
    this.cart.get('restourant_id').setValue(json.restourant_id);
    this.cart.get('restourant_name').setValue(json.restourant);
    this.cart.get('price').setValue(json.price);
    this.cart.get('price_id').setValue(json.id);
    let qty = this.cart.get('quantity').value;
    this.price = json.price;
    this.amount = json.price * qty;
    this.cart.get('amount').setValue( this.amount );
  }

  doSubmit(){
    this.loading.present();
    if( this.action == 'new'){
      this.insertRecord();
    }
    if( this.action == 'update'){
      this.updateRecord();
    }
    this.navCtrl.setRoot( CheckoutPage );
    //alert('comming soon...');
  }

  currentDate() {
    let deal = new Date();
    return deal.setDate(deal.getDate());
  }
  // Manage SQLite 
  /* ======================================================================================== */
  insertRecord(){
    this.qr.db().then((db:SQLiteObject) =>{
      db.executeSql('INSERT INTO ' + this.table +' (userId, userName, price_id, category_id, food_id, food_name, restourant_id, restourant_name, quantity, price, amount, remark, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [ 
        this.cart.get('userId').value,
        this.cart.get('userName').value, 
        this.cart.get('price_id').value,
        this.cart.get('category_id').value, 
        this.cart.get('food_id').value, 
        this.cart.get('food_name').value,
        this.cart.get('restourant_id').value,
        this.cart.get('restourant_name').value,
        this.cart.get('quantity').value,
        this.cart.get('price').value,
        this.cart.get('amount').value,
        this.cart.get('remark').value,
        this.currentDate()
        ]).then((data) => {
            this.loading.dismissAll();
        },
        (error) => {
            alert('Error \nCannot insert record' + JSON.stringify( error ));
        });
    },(error) => {
        alert('Error \n' + JSON.stringify(error));
    });
  }

  updateRecord(){
    this.qr.db().then((db: SQLiteObject) => {
      db.executeSql("UPDATE " + this.table  + " SET userId = '" + this.cart.get('userId').value + "', "
                                            + "userName = '" + this.cart.get('userName').value + "', "
                                            + "price_id = '" + this.cart.get('price_id').value + "', "
                                            + "category_id = '" + this.cart.get('category_id').value + "', "
                                            + "food_id = '" + this.cart.get('food_id').value + "', "
                                            + "food_name = '" + this.cart.get('food_name').value + "', "
                                            + "restourant_id = '" + this.cart.get('restourant_id').value + "', "
                                            + "restourant_name = '" + this.cart.get('restourant_name').value + "', "
                                            + "quantity = '" + this.cart.get('quantity').value + "', "
                                            + "price = '" + this.cart.get('price').value + "', "
                                            + "amount = '" + this.cart.get('amount').value + "', "
                                            + "remark = '" + this.cart.get('remark').value + "', "
                                            + "updated_at = '" + this.currentDate() + "'"
                             + " WHERE food_id = ?", [ this.food_id ]).then((data) => {
        this.loading.dismissAll();
      },
        (error) => {
          alert('Error \nCannot insert record' + JSON.stringify(error));
        });
    }, (error) => {
      alert('Error \n' + JSON.stringify(error));
    });
  }

  checkRecord(){
    let price_id = this.cart.get('price_id').value;
    this.qr.db().then((db:SQLiteObject) =>{
      db.executeSql('SELECT * FROM ' + this.table + ' WHERE price_id =?',[price_id]).then((data) =>{
        let len = parseInt( data.rows.length );
        let txt = 'length = ' + len ;
        if (  len > 0 ) {
            let item = data.rows.item(0);
            this.action = 'update';
            this.cart.get('restourant_id').setValue(item.restourant_id);
            this.cart.get('restourant_name').setValue(item.restourant_name);
            this.cart.get('quantity').setValue(item.quantity);
            this.cart.get('price').setValue(item.price);
            this.cart.get('amount').setValue(item.amount);
            this.cart.get('remark').setValue(item.remark);
            
        }else{
          txt += ' Error row == 0';
          this.action = 'new';
        }

        this.txtres = txt + ' Action = ' + this.action;
      },
      (error) => {
        alert( 'Error!!\nCannot open ' + this.table + ' error => ' + JSON.stringify( error ));
      });
    },
    (error) =>{
      alert('Error!!\nCannot open DATABASE ' + JSON.stringify( error ) );
    });
  }

}
