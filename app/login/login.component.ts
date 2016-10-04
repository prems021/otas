import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';
import { contentHeaders } from '../dashboard/transaction/headers';
import { Http } from '@angular/http'

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: [ 'login.component.css' ]
})
export class LoginComponent  {


            constructor( private router: Router , private http:Http ) { }

  model = new User( '','');
  submitted = false;
  onSubmit() { this.submitted = true; }
  active = true;

 
 login(){

 let body = JSON.stringify(this.model);
    
     console.log(body);
   this.http.post('http://localhost:3009/api/login', body,
       { headers: contentHeaders } ).subscribe (response => {
           
                    
          this.router.navigate(['/dashboard']);
        },
        error => {
          alert(error.text());
          console.log(error.text());
          this.router.navigate(['/signup']);
          }
      );
  }



           
 
       
}

  

  