import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  content:any = [];
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private http:HttpClient,
    private auth:AuthProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
    this.getContent();
  }

  getContent(){
    this.http.get( this.auth.api() + '/aboutus?token=' + this.auth.token() ).subscribe((res) =>{
        if( res['code'] == 200){
          this.content = res['data'];
        }
    },
    (error) =>{
        alert('Error!!\nCannot connect about us page ' + JSON.stringify(error));
    });
  }

}
