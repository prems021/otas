import { Component,Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AddVazhipad } from  './add_vazhipad';
import { Http } from '@angular/http';
import { contentHeaders } from './headers';
@Component({
  moduleId: module.id,
  selector: 'accounthead',
  templateUrl: 'accounthead.component.html',
  styleUrls: [ 'transaction.component.css' ]
})

export class AccountheadComponent 
{

    myForm: FormGroup;
    todo = new AddVazhipad('',10);
    constructor(   private fb: FormBuilder, private router: Router , private http: Http    ) { }
    

    ngOnInit()  {
     
     
   this.myForm = this.fb.group({
          
            vazhipad_name: ['', [<any>Validators.required, <any>Validators.minLength(3)]],
        
            rate: ['10'],
         
             
        });

   
    
  }
  addvazhipad()
  {
               this.todo = this.myForm.value;

           let body = JSON.stringify(this.todo);   
           console.log('data=',body) ;   
                   
                    this.http.post('http://localhost:3009/api/addnewpooja', body, { headers: contentHeaders } )
                    .subscribe (response => {
           
                    this.router.navigate(['/dashboard']);

         })
       

  }

}
