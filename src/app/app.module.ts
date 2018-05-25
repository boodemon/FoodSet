import { BrowserModule }            from '@angular/platform-browser';
import { ErrorHandler, NgModule, }  from '@angular/core';
import { HttpClientModule }         from '@angular/common/http';
import { CommonModule }         from '@angular/common';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
// ionic native //
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar }    from '@ionic-native/status-bar';
import { Facebook }     from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { NativeStorage }from '@ionic-native/native-storage';
import { SQLite } from '@ionic-native/sqlite';
import { DatePicker } from '@ionic-native/date-picker';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MyApp }        from './app.component';
import { HomePage }     from '../pages/home/home';
import { LoginPageModule }    from '../pages/login/login.module';
import { RegisterPageModule } from '../pages/register/register.module';
import { ForgotPageModule }   from '../pages/forgot/forgot.module';
import { DashboardPageModule } from '../pages/dashboard/dashboard.module'
import { CreateOrderPageModule} from '../pages/create-order/create-order.module';
import { HistoryPageModule } from '../pages/history/history.module';
import { TrackPageModule } from '../pages/track/track.module';
import { ProfilePageModule } from '../pages/profile/profile.module';
import { CategoryPageModule } from '../pages/category/category.module';
import { FoodPageModule } from '../pages/food/food.module';
import { FoodViewPageModule } from '../pages/food-view/food-view.module';
import { CheckoutPageModule } from '../pages/checkout/checkout.module';
import { PaymentPageModule } from '../pages/payment/payment.module';
import { AboutPageModule } from '../pages/about/about.module';
import { RestourantPageModule } from '../pages/restourant/restourant.module';
// IMPORT PROVIDER //
import { AuthProvider } from '../providers/auth/auth';
import { QueryProvider } from '../providers/query/query';

//import { FormsModule } from '@angular/forms';
const firebaseConfig = {
            apiKey: "AIzaSyCII1_3p5SMFw6uKxbHN_SLylkiVlo_Yk8",
            authDomain: "foodset-6261f.firebaseapp.com",
            databaseURL: "https://foodset-6261f.firebaseio.com",
            projectId: "foodset-6261f",
            storageBucket: "foodset-6261f.appspot.com",
            messagingSenderId: "563076778504"
    }
@NgModule({
  declarations: [
    MyApp,
    HomePage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      preloadModules: true
    }),
    HttpClientModule,
    LoginPageModule,
    CategoryPageModule,
    CreateOrderPageModule,
    FoodPageModule,
    ForgotPageModule,
    DashboardPageModule,
    ProfilePageModule,
    RegisterPageModule,
    HistoryPageModule,
    TrackPageModule,
    ProfilePageModule,
    FoodPageModule,
    FoodViewPageModule,
    CheckoutPageModule,
    PaymentPageModule,
    AboutPageModule,
<<<<<<< HEAD
    RestourantPageModule,
    Ionic2RatingModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp( firebaseConfig ),
    CommonModule
=======
    RestourantPageModule
>>>>>>> parent of 9e02d5f4... version 1.1.0
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    GooglePlus,
    SQLite,
    DatePicker,
    NativeStorage,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    QueryProvider,
    FileTransfer,
    FileTransferObject,
    File,
    Camera
  ]
})
export class AppModule {}
