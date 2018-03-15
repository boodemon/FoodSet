import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Platform, ToastController } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { CategoryPage } from '../category/category';
import { AuthProvider } from '../../providers/auth/auth';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
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

  private creator: FormGroup;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private auth:AuthProvider,
    private loader: LoadingController,
    private sqlite:SQLite,
    private frm: FormBuilder,
    public platform:Platform,
    public toastCtrl: ToastController,
  ) {
    this.auth.online(); 
    this.createForm();
    this.platform.ready().then(() => {
      this.createTable();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateOrderPage');
    this.sqlQuery();
  }

  createForm(){
     this.creator = this.frm.group({
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

  doCreate(){
    //this.tb = JSON.stringify( this.creator.value );
    this.tb = '';
    this.loading.present();
    let item = this.creator.value;
    this.deleteRecord();
    this.sqlite.create({
      name: 'setconference.db',
      location: 'default',
    }).then((db: SQLiteObject) => {
          this.insertRecord(item);
        //this.navCtrl.setRoot( CategoryPage );
        this.loading.dismissAll(); 
    }, (error) => {
      this.loading.dismissAll(); 
      this.tb = 'Error Cannot open database ' + JSON.stringify(error);
    });
  }
  //Manage Table 
  //========================================================================================
  createTable(){
    this.sqlite.create({
      name: 'setconference.db',
      location:'default'
    }).then( (db:SQLiteObject) => {
      db.executeSql('create table if not exists orders (id INTEGER PRIMARY KEY AUTOINCREMENT, userId INTEGER, userName TEXT, jobName TEXT, jobAddress TEXT, jobDate TEXT, jobTime TEXT, jobRemark TEXT, created_at TEXT, updated_at TEXT)',{})
      .then( (data) => {
       // this.tb = 'Create table orders successful query is ' + JSON.stringify( data );
      },(error) => {
          this.tb = 'Error can not create table orders';
      });
    })
      .catch(e => this.tb = 'Error can not create database ' + JSON.stringify( e ) );
  }

  insertRecord(item){
    let users = JSON.parse( this.user );
    this.sqlite.create({
      name: 'setconference.db',
      location: 'default',
    }).then((db: SQLiteObject) => {
          db.executeSql("INSERT INTO orders (userId, userName, jobName, jobAddress, jobDate, jobTime, jobRemark, created_at, updated_at) VALUES (?,?,?,?,?,?,?,?,?)", [users.id, users.name, item.name, item.address, item.onDate, item.onTime, item.remark, this.currentDate(), this.currentDate()]).then((data) => {
            this.tb += 'table orders inserted ' + JSON.stringify(data);
            let toast = this.toastCtrl.create({
              message: 'Create new order successful',
              duration: 2000
            });
            toast.present();
            this.loading.dismissAll();
            this.navCtrl.setRoot(CategoryPage);
          }, (error) => {
            this.tb = 'Error insert on orders table ' + JSON.stringify(error);
          });
      }, (error) => {
        this.tb = 'Error show database ' + JSON.stringify(error);
      });
  }

  updateRecord(item,data){
    this.sqlite.create({
      name: 'setconference.db',
      location: 'default',
    }).then((db: SQLiteObject) => {
          db.executeSql("UPDATE orders SET jobName = " + item.name + ", jobAddress = " + item.address + ", jobDate = " + item.onDate + ", jobTime = " + item.onTime + ", jobRemark = " + item.remark + ", updated_at = " + this.currentDate() + " WHERE id=?", [data.row.item(0).id]).then((data2) => {
            this.tb = 'table orders updated ' + JSON.stringify(data2);
            let toast = this.toastCtrl.create({
              message: 'Data update successful',
              duration: 2000
            });
            toast.present();
            this.loading.dismissAll();
            //this.navCtrl.setRoot(CategoryPage);
          }, (error) => {
            this.tb = 'Error update orders table ' + JSON.stringify(error);
          });
      }, (error) => {
        this.tb = 'Error show database ' + JSON.stringify(error);
      });
  }

  deleteRecord(){
    this.sqlite.create({
      name: "setconference.db",
      location: "default"
    }).then((db: SQLiteObject) => {
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

        let row = data.rows.item(0);
        input.get('name').setValue(row.jobName);
        input.get('address').setValue(row.jobName);
        input.get('onDate').setValue(row.jobDate);
        input.get('onTime').setValue(row.jobTime);
        input.get('remark').setValue(row.jobRemark);
      } else {
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
      this.sqlite.create({
        name:'setconference.db',
        location:'default',
      }).then( (db:SQLiteObject) =>{
        this.showDb(db,input);
      },(error) => {
        this.tb = 'Error show database ' + JSON.stringify(error);
      });
  }
  onQuery( query ){
      this.sqlite.create({
        name: 'setconference.db',
        location: 'default',
      }).then((db: SQLiteObject) => {
        query;
      }, (error) => {
        this.tb = 'Error show database ' + JSON.stringify(error);
      });
  }
  
}
