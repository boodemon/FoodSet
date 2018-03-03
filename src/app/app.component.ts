import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { AuthProvider } from '../providers/auth/auth';
import { DashboardPage } from '../pages/dashboard/dashboard';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  rootPage: any = this.startPage();

  constructor(
          platform: Platform, 
          statusBar: StatusBar, 
          splashScreen: SplashScreen,
          auth : AuthProvider
          ) 
  {
    platform.ready().then( () => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.startPage();
    });
  }
  startPage(){
    let token = localStorage.getItem('token');
    if( token ){
      return DashboardPage;
    }else{
      return LoginPage;
    }
  }
}

