

import { Component,Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Zero }    from './zero';
import { contentHeaders } from './headers';
import { Http } from '@angular/http';
import { Vazhipad }    from './vazhipad';
import { VazhipadService }    from './vazhipad.service';
import 'rxjs/add/operator/toPromise';
import { Observable }        from 'rxjs/Observable';
import { DataService  } from './data.service';
import { FormGroup, FormControl, Validators, FormBuilder } 
    from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'transaction',
  templateUrl: 'transaction.component.html',
  styleUrls: [ 'transaction.component.css' ]
})
export class TransactionComponent implements OnInit {

    vazhipads: Vazhipad[];
    myForm: FormGroup;
    active = true;
    public events: any[] = [];
   todo = new Zero(1,[],'','',10,10,0);
     
  
    
  constructor( private fb: FormBuilder, private router: Router, private http: Http, private vazhipadService: VazhipadService , private dataService: DataService
    ) { 
     
    }

   submitted = false;
    onSubmit() { 
         this.submitted = true;
         this.postdata();
         console.log('hi');
     }
  
  getVazhipad(): void 
  {
    this.vazhipadService.getVazhipad().then(vazhipads => this.vazhipads = vazhipads);
  }






    ngOnInit()  {
     this.getVazhipad()
     
   this.myForm = this.fb.group({
            quantity: ['1'],
            pooja_name: ['Neyyappam'],
            devotee_name: ['premji', [<any>Validators.required, <any>Validators.minLength(3)]],
            devotee_star: ['Aswathy'],
            rate: ['10'],
            amount: ['10'],
            total: ['0']

             
        });

        
     this.getVazhipad()
    this.formchange();
    
  }
    
 formchange()
{

 
  const myFormStatusChanges = this.myForm.statusChanges;
        const myFormValueChanges = this.myForm.valueChanges;
        
       
    
  
}

save(model: Zero, isValid: boolean) {
        this.submitted = true;
        console.log(model, isValid);
    }


    
  

  stars = ['Aswathy', 'Bharani','Karthika', 'Makayiarm'];
  
   
  
  //model = new Hero(1,[],'','',10,10);

 // todo = new Zero ({quantity:1,pooja_name:'',devotte_name:'',devotee_star:'',rate:10,amount:10  });
 
  heroes: Zero[] = [];
  


getamt()
{
    
    this.myForm.patchValue({amount: this.todo.quantity * this.todo.rate  })
    
}
   


  addform()
  { 
     
 
   this.todo = this.myForm.value;
   this.myForm.patchValue({amount: this.todo.quantity * this.todo.rate  })
   this.todo = this.myForm.value;
   this.myForm.patchValue({total: this.todo.total +++ this.todo.amount})
   this.todo = this.myForm.value;
  
   this.heroes.push(this.todo);
  
console.log('hero=',this.heroes);

  
   

  }

 
      
  postdata(){   let body = JSON.stringify(this.todo);       
                    console.log('body=', body);
                    this.http.post('http://localhost:3009/api/savepooja', body, { headers: contentHeaders } )
                    .subscribe (response => {
           
                    this.router.navigate(['/dashboard']);

         })
       
       
}

private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


  }

  
