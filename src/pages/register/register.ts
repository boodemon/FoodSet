import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AuthProvider } from '../../providers/auth/auth';
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
        confirm_password:''
          };
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loading:LoadingController,
    public auth:AuthProvider,
    public http: HttpClient
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
    this.preload.present();
    console.log('param : ', this.reg,' reg ', this.reg );
    this.auth.register(this.reg).subscribe((response) => {
        this.preload.dismiss();
        
    },
    err => {
      console.log('error is ', JSON.stringify(err),':',err );
      if (err.status == 422){
        let valid = err.error;
        console.log('err email ', valid);
        if( valid.name )
          this.errs.name = valid.name[0];

        if( valid.username !== undefined )
          this.errs.username = valid.username[0];

        if( valid.email )
          this.errs.email = valid.email[0];

        if( valid.password )
          this.errs.password = valid.password[0];
        console.log('message error = ', this.errs );
        this.preload.dismiss();
        return false;
      }
    });
  }

  checkuser(input){
    this.preload.present();
    this.auth.checkUser([{type:input,text: this.reg.username }]).subscribe((response) => {
      console.log('response is ', response );
      this.preload.dismiss();
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