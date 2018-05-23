import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController, LoadingController} from 'ionic-angular';
import { Facebook, FacebookLoginResponse} from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { AuthProvider } from '../../providers/auth/auth';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup} from '@angular/forms';

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
  private frmLogin:FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private facebook:Facebook,
    private auth:AuthProvider,
    private http:HttpClient,
    private alertCtrl: AlertController,
    private googlePlus: GooglePlus,
    private loader: LoadingController,
    private frm: FormBuilder
  ) {
    this.created();
  }
  loading = this.loader.create({
    content: 'Loading ...',
    dismissOnPageChange: true,
  });

  api = this.auth.api();
  user:any = {};

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  created(){
    this.frmLogin = this.frm.group({
      username:[''],
      password:['']
    });
  }
  goToForgot(){
    this.navCtrl.push(ForgotPage);
  }
  goToRegister(){
    this.navCtrl.push(RegisterPage);
  }
  doLogin(){
    this.loading.present();
    this.http.post(this.api + '/auth0/login', this.frmLogin.value ).subscribe((response) => {
        let code = response['code'];
        if( code == 200 ){
          localStorage.setItem('token',response['auth']);
          localStorage.setItem('user', JSON.stringify( response['data'] ) );
          this.navCtrl.setRoot( DashboardPage );
        }else{ 
          let alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: response['message'],
            buttons: ['OK']
          });
          alert.present();
        }
        console.log('response ', response );
        this.loading.dismiss();
      },
      (err) =>{
        alert('Login Error ' + err.message );
        this.loading.dismiss();
      });
  }

  loginFacebook(){
    this.loading.present();
    this.facebook.login(['email', 'public_profile']).then((response: FacebookLoginResponse) => {
      this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
        this.http.post(this.api + '/auth0/facebook', profile).subscribe((response) => {
          let code = response['code'];
          if (code == 200) {
            localStorage.setItem('token', response['auth']);
            localStorage.setItem('user', JSON.stringify(response['data']));
            this.navCtrl.setRoot(DashboardPage);
          } else {
            let alert = this.alertCtrl.create({
              title: 'Error',
              subTitle: response['message'],
              buttons: ['OK']
            });
            alert.present();
          }
        },
          err => {
            alert('err \n'+ JSON.stringify( err ) );
            this.loading.dismiss();
          });
        //this.userData = {email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name']}
      });
    }).catch(err => {
      this.facebook.logout();
      alert('Error!! ' + JSON.stringify( err ) ); 
      this.loading.dismiss(); 
    });
  }

  loginGoogle(){
    this.loading.present();
    this.googlePlus.login({
        // 'webClientId': '393062943788-9757oi79t1ldru2dbs7pq9ohugacjuea.apps.googleusercontent.com',
        // 'offline': true,
        // 'scopes': 'profile email'
      })
      .then(res => {
        this.http.post(this.api + '/auth0/google', res).subscribe((response) => {
          let code = response['code'];
          if (code == 200) {
            localStorage.setItem('token', response['auth']);
            localStorage.setItem('user', JSON.stringify(response['data']));
            this.navCtrl.setRoot(DashboardPage);
          } else {
            let alert = this.alertCtrl.create({
              title: 'Error',
              subTitle: response['message'],
              buttons: ['OK']
            });
            alert.present();
          }
          this.loading.dismiss();
         //this.userData = response;
        },
          err => {
            alert('err \n' + JSON.stringify(err));
            this.loading.dismiss();
          });        
      })
      .catch(err => {
        alert( 'Error !! Cannot login please try again' + JSON.stringify(err)); 
        this.googlePlus.logout();
        this.loading.dismiss(); 
      });
  }

}
