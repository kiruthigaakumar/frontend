import { Routes } from '@angular/router';
import { VerifyOtpComponent } from './verify-otp/verify-otp.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserloginComponent } from './userlogin/userlogin.component';

export const routes: Routes = [
   { path: '', redirectTo: 'userlogin', pathMatch: 'full' }, // 👈 Add this
  { path: 'userlogin', component: UserloginComponent },
  { path: 'verify-otp', component: VerifyOtpComponent },
  { path: 'dashboard', component: DashboardComponent }
];
