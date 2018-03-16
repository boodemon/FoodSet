import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';

/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
  pricelist = [
    {
      'id' : 1,
      'name': 'AAAAA'
    },
    {
      'id' : 2,
      'name': 'BBBB'
    },
    {
      'id' : 3,
      'name': 'CCCC'
    },
    {
      'id' : 4,
      'name': 'DDDD'
    },
    {
      'id' : 5,
      'name': 'EEEE'
    }
  ];
  group:FormGroup;
  result:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private form:FormBuilder) {
    this.group = this.form.group({
      'opt':[1]
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }
  doOption( val ){
    this.result = 'change option value' + JSON.stringify( val );
  }
}
