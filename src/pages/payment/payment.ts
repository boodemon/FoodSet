import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController , ToastController} from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AuthProvider } from '../../providers/auth/auth';

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
  banks:any = [];
  imageURI: any;
  imageFileName: any;
  pay: any = [];
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private http: HttpClient,
    private auth: AuthProvider,
    private transfer: FileTransfer,
    private camera: Camera,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
            ) {
        this.auth.online();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
    this.getAll();
  }
  loading = this.loadingCtrl.create({
    content: 'Loading ...',
    dismissOnPageChange: true,

  });
  getAll(){
    this.http.get( this.auth.api() + '/bank?token=' + this.auth.token() ).subscribe( (res) =>{
        let code = res['code'];
        if( code == 200){
          this.banks = res['data'];
        }
    },
    (error) => {
        alert('Cannot connect table ' + JSON.stringify( error ) );
    })
  }
  getAttach() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }

    this.camera.getPicture(options).then((imageData) => {
      this.imageURI = imageData;
    }, (err) => {
      console.log(err);
      this.presentToast(err);
    });
  }

  doSubmit() {

    this.loading.present();
    const fileTransfer: FileTransferObject = this.transfer.create();

    let options: FileUploadOptions = {
      fileKey: 'ionicfile',
      fileName: 'ionicfile',
      chunkedMode: false,
      mimeType: "image/jpeg",
      headers: {}
    }

    fileTransfer.upload(this.imageURI, this.auth.api() + '/order-confirmation?token=' + this.auth.token() , options)
      .then((data) => {
        console.log(data + " Uploaded Successfully");
        this.imageFileName = this.auth.imgs() + '/documents/';
        this.loading.dismiss();
        this.presentToast("Image uploaded successfully");
      }, (err) => {
        console.log(err);
        this.loading.dismiss();
        this.presentToast(err);
      });
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
  doDimis(){
    
  }
}
