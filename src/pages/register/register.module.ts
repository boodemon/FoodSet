import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPage } from './register';
import { HTTP } from '@ionic-native/http';

import { AuthProvider } from '../../providers/auth/auth';

@NgModule({
  declarations: [
    RegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterPage),
    HTTP
  ],
  providers:[
    AuthProvider
  ]
})
export class RegisterPageModule {
  
}
