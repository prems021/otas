

import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent }      from './signup/signup.component';
import { TransactionComponent } from './dashboard/transaction/transaction.component';
import { VazhipadService } from './dashboard/transaction/vazhipad.service';
import { routing } from './routing';
import { AuthGuard } from './authguard';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    SignupComponent,TransactionComponent,LoginComponent
  ],
  providers: [
    AuthGuard,VazhipadService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}




