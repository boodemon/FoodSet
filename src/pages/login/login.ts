import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController, LoadingController, Platform} from 'ionic-angular';
import { Facebook, FacebookLoginResponse} from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import * as firebase from 'firebase/app';
import { AuthProvider } from '../../providers/auth/auth';
import { HttpClient } from '@angular/common/http';
import { ForgotPage } from '../forgot/forgot';
import { RegisterPage } from '../register/register';
import { DashboardPage } from '../dashboard/dashboard';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  gStatus:number = 0;
  gUser: Observable<firebase.User>;
  frmLogin:FormGroup;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private facebook:Facebook,
    private auth:AuthProvider,
    private http:HttpClient,
    private alertCtrl: AlertController,
    private googlePlus: GooglePlus,
    private loader: LoadingController,
    private afAuth: AngularFireAuth, 
    private platform: Platform,
    private frm:FormBuilder
  ) {
    this.gUser = this.afAuth.authState;
    this.createForm();
  }
  createForm(){
    this.frmLogin = this.frm.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
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
    if (this.platform.is('cordova')) {
      this.loading.present().then((res) => {;
        this.nativeGoogleLogin();
      });
    } else {
      this.webGoogleLogin();
    }
  }
  async nativeGoogleLogin(): Promise<void> {
    try {
     //let webClientId  = '563076778504-8idldes7n7cb250siu9a9ic0ssaruq65.apps.googleusercontent.com';
     //let webClientId2 = '563076778504-dc8gj2on3ce71klc2u362j07b7bk1796.apps.googleusercontent.com';
     let webClientId3 = '563076778504-jv6mkamq5do9fohulgkpjtu7i7nouqpp.apps.googleusercontent.com';
      //const gplusUser = await 
      this.googlePlus.login({
        'webClientId': webClientId3,
        'offline': true,
        'scopes': 'profile email'
      }).then(gplusUser => {
          console.log('gplus user = ', gplusUser );
          //return await 
          let gResult = this.afAuth.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken));
          console.log('google result = ', gResult );
          this.userData = gResult;

      }).catch((err) => {
        console.log('native catch error is ', err);
        this.loading.dismiss();
        alert('Error!! Cannot login this. Please try again for other login.');  
        this.gStatus = err;
      });
  
    } catch(err) {
      console.log('try error is ', err);
      this.loading.dismiss();
      alert('Error!! Cannot login this. Please try again for other login.');
      //this.navCtrl.setRoot(LoginPage);
      this.gStatus = err;
   }

  }
  async webGoogleLogin(): Promise<void> {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const credential = await this.afAuth.auth.signInWithPopup(provider);
      console.log('credential value = ', credential.user );
      this.sendData( credential.user );
    } catch(err) {
      console.log(err)
    }
  
  }

  sendData(res){
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
  }


}
