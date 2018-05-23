import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the RatingViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rating-view',
  templateUrl: 'rating-view.html',
})
export class RatingViewPage {
  price_id:number = this.navParams.get('price_id');
  rows:any = [];
  score:any=[];
  token = 'token=' + this.auth.token();
  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams,
      private http: HttpClient,
      private auth: AuthProvider
    ) {
      this.auth.online();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RatingViewPage');
    this.allRate();
  }

  allRate(){

     this.http.get( this.auth.api() + '/rating/' + this.price_id +'?'+this.token).subscribe((res) => {
       console.log('rating list => ', res );
        if( res['code'] == 200 ){
            this.rows = res['data'];
            for(let i=0; i < res['data'].length; i++){
              this.score[i] = this.rows[i].score;
            }
        } else {
          alert('Error !! Cannot query rating score. Please try again later.');
        } 
      
     },
    (err) => {
      alert('Error !!' + JSON.stringify( err ));
    });
  }

}
