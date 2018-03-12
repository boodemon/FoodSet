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
  online_status:string = '';

  api(){
    //return 'http://localhost/2017/T-API/api';
    return 'http://ex.saiimog.com/set-conference/api';

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
    var status = '';// = 'online';
    this.http.get( this.api() + '/user?token=' + this.token() ).subscribe((res) => {
        let code = res['code'];
        if( code != 200 ){
          alert(res['msg']);
          this.logout();
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
    localStorage.removeItem('token');
    location.reload();
  }

}
