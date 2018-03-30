import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController , ToastController} from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AuthProvider } from '../../providers/auth/auth';
import { TrackPage } from '../track/track';

/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
  res:string;
  banks:any = [];
  order:any = [];
  imageURI: any;
  imageFileName: any;
  pay: any = [];
  isPreview:boolean = false;
  param:string = '?token=' + this.auth.token();
  private frmConfirm : FormGroup;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private http: HttpClient,
    private auth: AuthProvider,
    private camera: Camera,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private form: FormBuilder
            ) {
        this.auth.online();
        this.createForm();
        
  }
  createForm(){
    this.frmConfirm = this.form.group({
      'id' : [''],
      'ref_id' : [this.navParams.get('order_id') ],
      'bank':['',Validators.required],
      'subject':['',Validators.required],
      'message' : ['',Validators.required],
      'attach':[null],
      'token' : [this.auth.token()]
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
    this.getBank();
    this.getOrder();
  }
  loading = this.loadingCtrl.create({
    content: 'Loading ...',
    dismissOnPageChange: true,

  });
  getBank(){
    this.http.get( this.auth.api() + '/bank' + this.param ).subscribe( (res) =>{
        let code = res['code'];
        if( code == 200){
          this.banks = res['data'];
        }
    },
    (error) => {
        alert('Cannot connect table ' + JSON.stringify( error ) );
    })
  }

  getOrder(){
    this.loading.present();
    this.http.get( this.auth.api() + '/order/'+ this.navParams.get('order_id') + this.param ).subscribe( (res) =>{
        let code = res['code'];
        if( code == 200){
          this.order = res['head'];
          this.frmConfirm.get('subject').setValue('แจ้งยืนยันการชำระเงิน Order no.#' + this.order.code );
          this.loading.dismissAll();
        }else{
           this.loading.dismissAll();
        }
       
    },
    (error) => {
        alert('Cannot connect table ' + JSON.stringify( error ) );
        this.loading.dismissAll();
    })
  }

  getAttach() {

    const options: CameraOptions = {
      quality: 100,
      targetWidth: 800,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.imageURI = 'data:image/jpeg;base64,' + imageData;
      this.frmConfirm.get('attach').setValue( this.imageURI );
      this.isPreview = true;
    }, (err) => {
      console.log(err);
      this.presentToast(err);
      this.isPreview = false;
    });
  }

  doSubmit() {
    this.loading.present();
    this.http.post(this.auth.api() + '/order-confirmation',this.frmConfirm.value).subscribe((result) =>{
      //this.res = JSON.stringify(result);
      this.navCtrl.setRoot( TrackPage );
      this.loading.dismissAll();
    },
    (error) =>{
      alert('Error!!\nCannot Comfirm payment. Please try again' + JSON.stringify(error));
    });    
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'middle'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
  doCancel(){
    this.navCtrl.pop();
  }
}
