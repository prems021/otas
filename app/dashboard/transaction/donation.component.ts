import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Donation } from  './booking';
import { Http } from '@angular/http';
import { contentHeaders } from './headers';
import 'rxjs/add/operator/toPromise';
import { Observable }        from 'rxjs/Observable';
@Component({
  moduleId: module.id,
  selector: 'donation',
  templateUrl: 'donation.component.html',
  styleUrls: [ 'transaction.component.css' ]
})



export class DonationComponent 
{

   myForm: FormGroup;
   types = ['Common', 'Kshethra punurudharam'];

   todo = new Donation('','','',0,0);
    constructor(   private fb: FormBuilder, private router: Router , private http: Http    ) { }
    

    ngOnInit()  {
   
        this.myForm = this.fb.group({
                                  
                                    donationtype: ['', [<any>Validators.required]],
                                    name: [],
                                    address: [],
                                    phonenumber:[],
                                    amount: ['', [<any>Validators.required]]
                                    
                                   });
    

  
               }
  
        
        
        makedonation()
        {
          this.todo = this.myForm.value;


            
           let body = JSON.stringify(this.todo);   
           
             
              this.http.post('http://localhost:3009/api/makedonation',body,{ headers: contentHeaders } )
                .subscribe (response => {
                            alert(response.text());
                            this.router.navigate(['/dashboard']);
                             
                      },
        error => {
          alert(error.text());
          console.log(error.text());

        
          })




        }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
