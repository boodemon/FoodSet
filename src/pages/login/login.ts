import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController, LoadingController, Platform} from 'ionic-angular';
import { Facebook, FacebookLoginResponse} from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import * as firebase from 'firebase/app';
import { AuthProvider } from '../../providers/auth/auth';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup} from '@angular/forms';
import { ForgotPage } from '../forgot/forgot';
import { RegisterPage } from '../register/register';
import { DashboardPage } from '../dashboard/dashboard';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
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
  gUser: Observable<firebase.User>;
  private frmLogin:FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private facebook:Facebook,
    private auth:AuthProvider,
    private http:HttpClient,
    private alertCtrl: AlertController,
    private gplus: GooglePlus,
    private loader: LoadingController,
    private frm: FormBuilder,
    private afAuth: AngularFireAuth,
    private platform: Platform
  ) {
    this.created();
    this.gUser = this.afAuth.authState;
  }

  loading = this.loader.create({
    content: 'Loading ...',
    dismissOnPageChange: true,
  });

  api = this.auth.api();

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
      });
    }).catch(err => {
      this.facebook.logout();
      alert('Error!! ' + JSON.stringify( err ) ); 
      this.loading.dismiss(); 
    });
  }

  loginGoogle(){
    
    //this.loading.present();
    if (this.platform.is('cordova')) {
      //let gAuth = this.nativeGoogleLogin();
      console.log( 'gauth click login' );
      this.gplus.login({})
      .then(res => console.log('native res ' , res))
      .catch(err => console.error('native error => ', err));
    } else {
      this.webGoogleLogin();
    }
    
  }

  async nativeGoogleLogin(): Promise<void> {
    try {
  
      const gplusUser = await this.gplus.login({
        'webClientId': '563076778504-jv6mkamq5do9fohulgkpjtu7i7nouqpp.apps.googleusercontent.com',
        'offline': true,
        'scopes': 'profile email'
      })
  
      return await this.afAuth.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken))
  
    } catch(err) {
      console.log(err)
    }
  }

  async webGoogleLogin(): Promise<void> {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const credential = await this.afAuth.auth.signInWithPopup(provider);
      this.googleLogin( credential );
    } catch(err) {
      alert('Web Google Login Error!! ' + err);
    }
  
  }

  googleLogin(data){
      this.http.post(this.api + '/auth0/google', data).subscribe((response) => {
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
      },
      err => {
          alert('err \n' + err.message );
          this.loading.dismiss();
      });   
  }

}
