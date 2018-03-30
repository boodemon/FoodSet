import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  user = JSON.parse( localStorage.getItem('user') );
  password_confirmation:string;
  password:string;
  err:any={
    'password':'',
    'password_confirmation' : ''
  };
  gpass:FormGroup;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private auth:AuthProvider,
    private http:HttpClient,
    private frm:FormBuilder,
    private alertCtrl:AlertController,
    private loader:LoadingController
  ) {
    this.auth.online();
    this.createForm();
  }

  createForm(){
    this.gpass = this.frm.group({
      'password' : [''],
      'password_confirmation':['']
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  loading = this.loader.create({
    content: 'Loading ...',
    dismissOnPageChange: true
  });

  doChange(){
        this.loading.present();
        let password = this.gpass.get('password').value;
        let password_confirmation = this.gpass.get('password_confirmation').value;
        let alert = this.alertCtrl.create({
          title:' ERROR!!',
          message:'Password not match. Please try gain.',
          buttons:['OK']
        });

        
        let confirm = this.alertCtrl.create({
          title: 'CONFIRM CHANGE PASSWORD',
          message: 'Please confirm to change your password ? ',
          buttons: [
            {
              text: 'No',
              handler: () => {
                console.log('Disagree clicked');
                this.loading.dismissAll();
              }
            },
            {
              text: 'Yes',
              handler: () => {
                this.changePassword( password );
              }
            }
          ]
        });
        if( password == password_confirmation ){
            confirm.present();
        }else{
            alert.present();
        }
  }

  changePassword(password){
    let param = {
      'password' : password,
      'token'    : this.auth.token()
    };
    let success = this.alertCtrl.create({
      title: 'SECCESS FULL',
      message: 'Change your password success full',
      buttons: ['OK']
    });

    this.http.post( this.auth.api() + '/user/change-password',param).subscribe((response) => {
      if( response['code'] == 200){
        localStorage.setItem('user', JSON.stringify(response['data'] ) );
        localStorage.setItem('token', JSON.stringify( response['auth'] ) );
        this.gpass.get('password').setValue('');
        this.gpass.get('password_confirmation').setValue('');
        success.present();
      }
      this.loading.dismissAll();
    },
    (error) =>{
        alert('Error!!\nCannot change your password ' + JSON.stringify(error));
        this.loading.dismissAll();
    });
  }

}
