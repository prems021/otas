import { Injectable }    from '@angular/core';
import { Headers, Http, Response, RequestOptionsArgs } from '@angular/http';
import { contentHeaders } from './headers';
import 'rxjs/add/operator/toPromise';
import { Hero }    from './hero';
import { Router } from '@angular/router';
import { Zero } from './zero';
@Injectable()


export class DataService 
{
   constructor(private router: Router,private http: Http) { }
  
   
    cart : Hero[] =[];
   

        addtocart(dee : Object) : Promise <Hero>
           
          {
                    let body = JSON.stringify(dee);       
                    return this.http
                    .get('http://localhost:3009/api/getpoojaplus' )
                    .toPromise()
                    .then(res => <Hero> res.json(), this.handleError)
                    .catch(this.handleError);
                         
     
   
            }   
      

create(name: Object): Promise<Zero> {
    return this.http
      .get('http://localhost:3009/api/getpoojaplus')
      .toPromise()
      .then(res => <Zero> res.json(),this.handleError)
      .catch(this.handleError);
  }


private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
    
  }
