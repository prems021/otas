import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero }    from './hero';
import { contentHeaders } from './headers';
import { Http } from '@angular/http';
import { Vazhipad }    from './vazhipad';
import { VazhipadService }    from './vazhipad.service';
import 'rxjs/add/operator/toPromise';
import { Observable }        from 'rxjs/Observable';

@Component({
  moduleId: module.id,
  selector: 'transaction',
  templateUrl: 'transaction.component.html',
  styleUrls: [ 'transaction.component.css' ]
})
export class TransactionComponent implements OnInit {

   vazhipads: Vazhipad[];

  constructor(
    private router: Router, private http: Http, private vazhipadService: VazhipadService
    ) { }
  getVazhipad(): void 
  {
    this.vazhipadService.getVazhipad().then(vazhipads => this.vazhipads = vazhipads);
  }
    ngOnInit(): void {
    this.getVazhipad()
      
  }

  stars = ['Aswathy', 'Bharani','Karthika', 'Makayiarm'];
  
   
  
  model = new Hero( 1,[],'','',10,10,10);
  submitted = false;
  onSubmit() { this.submitted = true; }
  
  active = true;
 


  

      
  postdata(){   let body = JSON.stringify(this.model);       
       
                    this.http.post('http://localhost:3009/api/newpooja', body, { headers: contentHeaders } )
                    .subscribe (response => {
           
                    this.router.navigate(['/dashboard']);

         })
       
       
}

private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


  }

  
