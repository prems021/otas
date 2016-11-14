import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Report } from  './booking';
import { Http } from '@angular/http';
import { contentHeaders } from './headers';
import 'rxjs/add/operator/toPromise';
import { Observable }        from 'rxjs/Observable';
@Component({
  moduleId: module.id,
  selector: 'report',
  templateUrl: 'report.component.html',
  styleUrls: [ 'transaction.component.css' ]
})
export class ReportComponent 
{


   myForm: FormGroup;
   types = ['Common', 'Kshethra punurudharam'];

   todo = new Report('',new Date() ,new Date());
    constructor(   private fb: FormBuilder, private router: Router , private http: Http    ) { }
    

    ngOnInit()  {
    console.log(this.todo);
        this.myForm = this.fb.group({
                                  
                                    reporttype: ['', [<any>Validators.required]],
                                    fromdate: [],
                                    todate: [],
                                                                       
                                   });
    

  
               }


  makereport()
  {

    this.todo = this.myForm.value;
    console.log('tr=',this.todo);

  let body = JSON.stringify(this.todo);   
           
             
              this.http.post('http://localhost:3009/api/reports',body,{ headers: contentHeaders } )
                .subscribe (response => {
                            alert(response.text());
                            this.router.navigate(['/dashboard']);


                                      
                      },
        error => {
          alert(error.text());
          console.log(error.text());

        
          })
  }


}
