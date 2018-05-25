import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard';
import { GoogleLoginComponent } from './google-login/google-login';
@NgModule({
	declarations: [DashboardComponent,
    GoogleLoginComponent,
    GoogleLoginComponent],
	imports: [],
	exports: [DashboardComponent,
    GoogleLoginComponent,
    GoogleLoginComponent]
})
export class ComponentsModule {}
