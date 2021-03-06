import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { CategoryPage } from '../category/category';
import { CheckoutPage } from '../checkout/checkout';
import { AuthProvider } from '../../providers/auth/auth';
import { SQLiteObject } from '@ionic-native/sqlite';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { QueryProvider } from '../../providers/query/query';
/**
 * Generated class for the CreateOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-create-order',
  templateUrl: 'create-order.html',
})
export class CreateOrderPage {
  orders:Array<Object>;  
  user = localStorage.getItem('user');
  tb:string = this.user;
  num:number = 0;
  action:string = 'new';
  orderId:number = 0;

  private creator: FormGroup;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private auth:AuthProvider,
    private loader: LoadingController,
    private qr:QueryProvider,
    private frm: FormBuilder,
  ) {
    this.auth.online(); 
    this.createForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateOrderPage');
    this.sqlQuery();
  }

  createForm(){
     this.creator = this.frm.group({
      'id':[0],
      'name':['',Validators.required],
      'address':['',Validators.required],
      'onDate': [this.defaultDate(),Validators.required],
      'onTime':['09:00',Validators.required],
      'remark':['']
    });
  }

   loading = this.loader.create({
    content: 'Loading ...',
    dismissOnPageChange:true
  });

  defaultDate(){
    let deal = new Date();
    let setDate =  deal.setDate(deal.getDate() + 10);
    var d = new Date(setDate),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  currentDate(){
    let deal = new Date();
    return deal.setDate(deal.getDate());
  }

  goDashboard(){
    this.loading.present();
    this.navCtrl.push( DashboardPage );
  }

  goCart() {
    this.loading.present();
    this.navCtrl.setRoot(CheckoutPage);
  }

  doCreate(){
    //this.tb = JSON.stringify( this.creator.value );
    this.tb = '';
    this.loading.present();
    let item = this.creator.value;
    //this.deleteRecord();
    this.qr.db().then((db: SQLiteObject) => {
          if( this.action == 'update'){
            this.updateRecord(item);
          }else{ 
            this.insertRecord(item);
          }
         // this.insertRecord(item);
        //this.navCtrl.setRoot( CategoryPage );
        this.loading.dismissAll(); 
    }, (error) => {
      this.loading.dismissAll(); 
      this.tb = 'Error Cannot open database ' + JSON.stringify(error);
    });
  }
  //Manage Table 
  //========================================================================================

  insertRecord(item){
    let users = JSON.parse( this.user );
    this.qr.db().then((db: SQLiteObject) => {
          db.executeSql("INSERT INTO orders (userId, userName, jobName, jobAddress, jobDate, jobTime, jobRemark, created_at, updated_at) VALUES (?,?,?,?,?,?,?,?,?)", [users.id, users.name, item.name, item.address, item.onDate, item.onTime, item.remark, this.currentDate(), this.currentDate()]).then((data) => {
            this.loading.dismissAll();
            this.navCtrl.setRoot(CategoryPage);
          }, (error) => {
            this.tb = 'Error insert on orders table ' + JSON.stringify(error);
          });
      }, (error) => {
        this.tb = 'Error show database ' + JSON.stringify(error);
      });
  }

  updateRecord(item){
    this.qr.db().then((db: SQLiteObject) => {
          db.executeSql("UPDATE orders SET jobName='" + item.name + "', jobAddress='" + item.address + "', jobDate='" + item.onDate + "', jobTime='" + item.onTime + "', jobRemark='" + item.remark + "', updated_at='" + this.currentDate() + "' WHERE id=?", [ item.id ]).then((data2) => {
            this.tb = 'table orders updated ' + JSON.stringify(data2);
            this.loading.dismissAll();
            this.navCtrl.setRoot(CategoryPage);
          }, (error) => {
            alert('Error update orders table ' + JSON.stringify(error));
          });
      }, (error) => {
        alert('Error show database ' + JSON.stringify(error));
      });
  }

  deleteRecord(){
    this.qr.db().then((db: SQLiteObject) => {
      db.executeSql('DELETE FROM orders',
        []).then((data) => {
        }, (error) => {
          //console.log("error: " + JSON.stringify(error));
        });
    });
  }

  showDb(db,input){
    return db.executeSql("SELECT * FROM orders ORDER BY id DESC", []).then((data) => {
      //this.tb += 'table created is field = ' + JSON.stringify(data);
      this.num = data.rows.length;
      if (data.rows.length > 0) {
        this.action = 'update';
        let row = data.rows.item(0);
        input.get('id').setValue(row.id);
        input.get('name').setValue(row.jobName);
        input.get('address').setValue(row.jobAddress);
        input.get('onDate').setValue(row.jobDate);
        input.get('onTime').setValue(row.jobTime);
        input.get('remark').setValue(row.jobRemark);

      } else {
        this.action = 'new';
        input.get('id').setValue(0);
        input.get('name').setValue('');
        input.get('address').setValue('');
        input.get('onDate').setValue(this.defaultDate());
        input.get('onTime').setValue('07:00');
        input.get('remark').setValue('');
      }
    }, (error) => {
      alert('Error shwo table ' + JSON.stringify(error) );
    });
  }

  sqlQuery(){
      let input = this.creator;
    this.qr.db().then( (db:SQLiteObject) =>{
        this.showDb(db,input);
      },(error) => {
        this.tb = 'Error show database ' + JSON.stringify(error);
      });
  }

  
}
