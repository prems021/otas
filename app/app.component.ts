
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>     Online Temple Administration System    </h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/login" routerLinkActive="active">Login</a>
      <a routerLink="/signup" routerLinkActive="active">Signup</a>

    </nav>
    <router-outlet></router-outlet>
  `
  
})
export class AppComponent {
  
}
