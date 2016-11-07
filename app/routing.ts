import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransactionComponent } from './dashboard/transaction/transaction.component';
import { AuthGuard } from './authguard';
import { AccountheadComponent } from './dashboard/transaction/accounthead.component';
import { BookingComponent } from './dashboard/transaction/booking.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
   {
    path: 'transaction',
    component: TransactionComponent
  },
  {
    path: 'accounthead',
    component: AccountheadComponent
  },
  {
  path: 'booking',
  component: BookingComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
