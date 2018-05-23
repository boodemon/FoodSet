import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the ForgotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgot',
  templateUrl: 'forgot.html',
})
export class ForgotPage {
  isError:boolean = false;
  isSuccess:boolean=false;
  email:string='';
  msg:string='';
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private http: HttpClient,
    private auth: AuthProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPage');
  }

  onSubmit(){
    this.http.post( this.auth.api() + '/auth0/forgot',{'email':this.email}).subscribe( (res) => {
      if( res['code'] == 200){
        this.isSuccess = true;
        this.isError = false;
        this.msg = 'Success full. Please checke your email for look new password';
      }else{ 
        this.isError = true;
        this.isSuccess = false;
        this.msg = 'Email Not found. please check email account!';
      }
    },
  (err) => {
    alert('Error !!' + JSON.stringify(err));
  });
  }

}
