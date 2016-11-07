import { Component,OnInit,DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Booking } from  './booking';
import { Http } from '@angular/http';
import { contentHeaders } from './headers';
import 'rxjs/add/operator/toPromise';
import { Observable }        from 'rxjs/Observable';
@Component({
  moduleId: module.id,
  selector: 'booking',
  templateUrl: 'booking.component.html',
  styleUrls: [ 'booking.component.css' ]
})



export class BookingComponent 
{
     Halls = ['Nila', 'Arathi'];
    myForm: FormGroup;
    
    book: boolean;
    date = new Date();
    newdate = new Date();
    oldbookingdate :FormControl;
    olddate = new Date();
 
    todo = new Booking('',160, new Date() ,false,'','',0,0);
    doto = new Booking('',160, new Date() ,false,'','',0,0);
    constructor(   private fb: FormBuilder, private router: Router , private http: Http    ) { }
    

    ngOnInit()  {
   
         this.myForm = this.fb.group({
          
            hallname: ['', [<any>Validators.required]],
            hallid: [],
            bookingdate: [],
            bookingflag:[],
            customer_name: ['', [<any>Validators.required]],
            customer_address: [],
            customer_contact: [],
            booking_rate: []
             
        });


     this.book = false;
  }

  checkavail()
  {  
    this.myForm.patchValue({hallid: 194  })
    this.todo = this.myForm.value;
    this.oldbookingdate = (<FormControl>this.myForm.controls['bookingdate']);
 
 this.olddate = this.oldbookingdate.value;


           let body = JSON.stringify(this.todo);   
           
             console.log(body);
              this.http.post('http://localhost:3009/api/getbookingdate',body,{ headers: contentHeaders } )
                .subscribe (response => {
               this.book = true;  
                      },
        error => {
          alert(error.text());
          console.log(error.text());

          this.book = false;
          })

  }
  booknow()
        {   
        
             this.myForm.patchValue({hallid: 194  })
           this.doto = this.myForm.value;
            this.oldbookingdate = (<FormControl>this.myForm.controls['bookingdate']);
            this.newdate = this.oldbookingdate.value;
          
           if(
           this.olddate !== this.newdate)
           {
             this.book= false;
             alert('Check Availabilty with Changed Date');
           }
           else{
           
            let body = JSON.stringify(this.doto);       
                    console.log('body=', body);
                    this.http.post('http://localhost:3009/api/savebooking', body, { headers: contentHeaders } )
                    .subscribe (response => {
                      alert(response.text());
                      this.router.navigate(['/dashboard']);
                    }, error => {
          alert(error.text());
         
              })
        }
  
        }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
