import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController} from 'ionic-angular';
import { Facebook, FacebookLoginResponse} from '@ionic-native/facebook';
import { AuthProvider } from '../../providers/auth/auth';
import { HttpClient } from '@angular/common/http';

import { ForgotPage } from '../forgot/forgot';
import { RegisterPage } from '../register/register';
import { DashboardPage } from '../dashboard/dashboard';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  userData:any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private facebook:Facebook,
    private auth:AuthProvider,
    private http:HttpClient,
    private alertCtrl: AlertController
  ) {
  }
  api = this.auth.api();
  user:any = {};

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  goToForgot(){
    this.navCtrl.push(ForgotPage);
  }
  goToRegister(){
    this.navCtrl.push(RegisterPage);
  }
  doLogin(){
    this.http.post(this.api + '/auth0/login',this.user ).subscribe((response) => {
        let code = response['code'];
        if( code == 200 ){
          localStorage.setItem('token',response['auth']);
          this.navCtrl.setRoot( DashboardPage );
        }else{ 
          let alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Username or Password not match. Please try again',
            buttons: ['OK']
          });
          alert.present();
        }
        console.log('response ', response );
      },
      err =>{
        console.log('err ', err );
      });
  }

  loginFacebook(){
    this.facebook.login(['email', 'public_profile']).then((response: FacebookLoginResponse) => {
      this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
        this.userData = {email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name']}
      });
    });
  }

}
