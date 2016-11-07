import './rxjs-extensions';
import { NgModule }       from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent }      from './signup/signup.component';
import { TransactionComponent } from './dashboard/transaction/transaction.component';
import { AccountheadComponent } from './dashboard/transaction/accounthead.component';
import { VazhipadService } from './dashboard/transaction/vazhipad.service';
import { routing } from './routing';
import { AuthGuard } from './authguard';
import { DataService } from './dashboard/transaction/data.service'
import { BookingComponent } from './dashboard/transaction/booking.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    SignupComponent,TransactionComponent,LoginComponent,AccountheadComponent,BookingComponent
  ],
  providers: [
    AuthGuard,VazhipadService , DataService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}





