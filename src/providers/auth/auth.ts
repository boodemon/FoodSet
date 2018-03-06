import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from 'ionic-angular';
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
    ) {
    console.log('Hello AuthProvider Provider');
  }

  api(){
    return 'http://localhost/2017/T-API/api';
   // return 'http://ex.saiimog.com/set-conference/api';

  }

  token(){
    return localStorage.getItem('token');
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
    return this.http.get( this.api() + '/user?token=' + this.token() ).subscribe((data)=>{
      console.log('check online ', data,' code is ' , data['code'] ); 
      let code = data['code'];
      if( code != 200 ){
        this.presentAlert( data['msg'] );
        this.removeToken();
      }
    });
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
    localStorage.removeItem('token');
  }

}
