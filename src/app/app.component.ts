import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { AuthProvider } from '../providers/auth/auth';
import { QueryProvider } from '../providers/query/query';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  rootPage: any = this.startPage();

  constructor(
          platform: Platform, 
          statusBar: StatusBar, 
          splashScreen: SplashScreen,
          auth : AuthProvider,
          qr:QueryProvider
          ) 
  {
    platform.ready().then( () => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      if( platform.is('cordova') ){
        //alert('created sqli header and detail');
        qr.createHead();
        qr.createDetail();    
      }
      statusBar.styleDefault();
      splashScreen.hide();
      this.startPage();
    });
  }
  startPage(){
    let token = localStorage.getItem('token');
    console.log('token ' , token );
    if( token ){
      console.log('go to dashboard');
      return DashboardPage;
    }else{
      console.log('go to login');
      return LoginPage;
    }
  }
}

