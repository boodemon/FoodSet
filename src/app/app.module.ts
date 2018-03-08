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
<<<<<<< HEAD
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
=======
import { LoginPage }    from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ForgotPage }   from '../pages/forgot/forgot';
import { DashboardPage } from '../pages/dashboard/dashboard'
import { CreateOrderPage} from '../pages/create-order/create-order';
import { HistoryPage } from '../pages/history/history';
import { TrackPage } from '../pages/track/track';
import { ProfilePage } from '../pages/profile/profile';
import { CategoryPage } from '../pages/category/category';
import { FoodPage } from '../pages/food/food';
>>>>>>> 3dee4e24759562cac634343a8882b04f029879ba
// IMPORT PROVIDER //
import { AuthProvider } from '../providers/auth/auth';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ForgotPage,
    RegisterPage,
    DashboardPage,
    CreateOrderPage,
    HistoryPage,
    TrackPage,
    ProfilePage,
    CategoryPage,
    FoodPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      preloadModules: true
    }),
    HttpClientModule,
<<<<<<< HEAD
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
=======
>>>>>>> 3dee4e24759562cac634343a8882b04f029879ba
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ForgotPage,
    DashboardPage,
    CreateOrderPage,
    HistoryPage,
    TrackPage,
    ProfilePage,
    CategoryPage,
    FoodPage
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
