import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , LoadingController,AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AuthProvider } from '../../providers/auth/auth';
import { DashboardPage } from '../dashboard/dashboard';
//import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  reg:any = {};
  errs:any = {
        name : '',
        email:'',
        username:'',
        password:'',
        password_confirmation :''
          };
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loading:LoadingController,
    public auth:AuthProvider,
    public http: HttpClient,
    public alertCtrl:AlertController
      ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  preload = this.loading.create({
      content: 'Loading...',
      dismissOnPageChange: true
    });

  postRegister() {
    console.log('param : ', this.reg,' reg ', this.reg );
    this.auth.register(this.reg).subscribe((response) => {
      console.log( 'result : ', response );
      let code = response['code'];
      if (code == 200) {
        let alert = this.alertCtrl.create({
          title: 'Success ful',
          subTitle: 'ทำการลงทะเบียนเรียบร้อยแล้ว',
          buttons: ['OK']
        });
        alert.present();
        this.login( this.reg.username, this.reg.password );

      }
    },
    err => {
      console.log('error is ', JSON.stringify(err),':',err );
      if (err.status == 422){
        let valid = err.error;
        console.log('err email ', valid);
        if( valid.name ){
          this.errs.name = valid.name[0];
        }else{ 
          this.errs.name = '';
        }
        if( valid.username !== undefined ){
          this.errs.username = valid.username[0];
        } else {
          this.errs.username = '';
        }
        if( valid.email ){
          this.errs.email = valid.email[0];
        } else {
          this.errs.email = '';
        }
        if( valid.password ){
          this.errs.password = valid.password[0];
        } else {
          this.errs.password = '';
        }
        console.log('message error = ', this.errs );
        return false;
      }
    });
  }

  checkuser(input){
    this.preload.present();
    this.auth.checkUser([{type:input,text: this.reg.username }]).subscribe((response) => {
      console.log('response is ', response );
    });
  }

  login( username, password ){
    this.http.post(this.auth.api() + '/auth0/login', {username:username,password:password}).subscribe((response) => {
      let code = response['code'];
      if (code == 200) {
        localStorage.setItem('token', response['auth']);
        this.navCtrl.setRoot(DashboardPage);
      } 
      console.log('response ', response);
    },
      err => {
        console.log('err ', err);
      });
  }

}
/*

{ 
    "headers": { "normalizedNames": { }, "lazyUpdate": null }, 
    "status": 422, 
    "statusText": "Unprocessable Entity", 
    "url": "http://localhost/2017/T-API/api/auth0/register", 
    "ok": false, 
    "name": "HttpErrorResponse", 
    "message": "Http failure response for http://localhost/2017/T-API/api/auth0/register: 422 Unprocessable Entity", 
    "error": { "email": ["กรุณาทำการป้อน E-mail"], "username": ["กรุณาทำการป้อน Username"], "name": ["กรุณาป้อนชื่อ"], "password": ["กรุณาป้อนรหัสผ่าน"] } }
    */