import { BrowserModule }            from '@angular/platform-browser';
import { ErrorHandler, NgModule, }  from '@angular/core';
import { HttpClientModule }         from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
// ionic native //
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar }    from '@ionic-native/status-bar';
import { Facebook }     from '@ionic-native/facebook';
import { NativeStorage }from '@ionic-native/native-storage';

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
// IMPORT PROVIDER //
import { AuthProvider } from '../providers/auth/auth';

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
    NativeStorage,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {}
