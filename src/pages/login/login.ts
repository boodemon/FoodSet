import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController, LoadingController} from 'ionic-angular';
import { Facebook, FacebookLoginResponse} from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
//import * as firebase from 'firebase/app';
import { AuthProvider } from '../../providers/auth/auth';
import { HttpClient } from '@angular/common/http';
import { ForgotPage } from '../forgot/forgot';
import { RegisterPage } from '../register/register';
import { DashboardPage } from '../dashboard/dashboard';
//import { AngularFireAuth } from 'angularfire2/auth';
//import { Observable } from 'rxjs/Observable';
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
  user:any={};
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private facebook:Facebook,
    private auth:AuthProvider,
    private http:HttpClient,
    private alertCtrl: AlertController,
    private googlePlus: GooglePlus,
    private loader: LoadingController
  ) {
  }

  loading = this.loader.create({
    content: 'Loading ...',
    dismissOnPageChange: true,

  });

  api = this.auth.api();

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

    this.http.post(this.api + '/auth0/login', this.user ).subscribe((response) => {
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
      },
      err =>{
        console.log('err ', err );
      });
  }

  loginFacebook(){
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
          });
      });
    }).catch(err => alert( JSON.stringify( err ) ) );;
  }

  loginGoogle(){
    this.googlePlus.login({})
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
          
         //this.userData = response;
        },
          err => {
            alert('err \n' + JSON.stringify(err));
          });        
      })
      .catch(err => console.error(err));
  }

}
