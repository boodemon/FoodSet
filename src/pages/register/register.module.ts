import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPage } from './register';
import {  HttpClientModule } from '@angular/common/http';

import { AuthProvider } from '../../providers/auth/auth';

@NgModule({
  declarations: [
    RegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterPage),
    HttpClientModule
  ],
  providers:[
    AuthProvider
  ]
})
export class RegisterPageModule {
  
}
