import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  
  constructor(
      public http: HttpClient,
      private alertCtrl:AlertController,
      private googlePlus: GooglePlus,
      private facebook: Facebook
    ) {
    console.log('Hello AuthProvider Provider');
  }
  online_status:string = '';

  api(){
    //return 'http://localhost/2017/T-API/api';
    //return 'http://ex.saiimog.com/set-conference/api';
    return 'http://setconference.net/api'
  }

  imgs(){
    //return 'http://ex.saiimog.com/set-conference/public/images';
    return 'http://setconference.net/public/images';
  }

  token(){
    return localStorage.getItem('token');
  }

  user(){
    return localStorage.getItem('user');
  }

  removeToken(){
    localStorage.removeItem('token');
  }

  checkUser(data){
    return this.http.post( this.api() + '/auth0/checkuser',data);
  }

  register(data){
    return this.http.post( this.api() + '/auth0/register',data);
  }
  
  online(){
    let user = this.user();
    let token = this.token();
    if (user === undefined || user === null || token === undefined || token === null){
      this.logout();
      location.reload();
    }
    this.http.get(this.api() + '/user?token=' + token ).subscribe((res) => {
        let code = res['code'];
        if( code != 200 ){
          alert(res['msg']);
          this.logout();
          location.reload();
        }
    },err =>{
      this.online_status = 'offline';
    }); 
    //console.log('status ', this.online_status );
    return this.online_status;
  }

  presentAlert( msg ) {
    let alert = this.alertCtrl.create({
      title: 'Error!!',
      subTitle: msg,
      buttons: ['OK']
    });
    alert.present();
  }

  logout(){
    this.googlePlus.trySilentLogin().then(gres => {
      console.log('google login status ', gres );
      this.googlePlus.logout();
    });
    this.facebook.getLoginStatus().then(fres => {
      console.log('facebook login status ', fres );
      if(fres == 'connected')
        this.facebook.logout();
    });
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    //location.reload();
  }

}
