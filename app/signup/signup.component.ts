import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  moduleId: module.id,
  selector: 'signup',
  templateUrl: 'signup.component.html',
  styleUrls: [ 'signup.component.css' ]
})
export class SignupComponent  {

  

  constructor(
    private router: Router
    ) { }
  }

  