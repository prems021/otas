import { Injectable }    from '@angular/core';
import { Headers, Http, Response, RequestOptionsArgs } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Vazhipad } from './vazhipad';
@Injectable()
export class VazhipadService 
{
   constructor(private http: Http) { }
  
   getVazhipad()  : Promise<Vazhipad[]> {
    


               return this.http.get('http://localhost:3009/api/getpooja')
                  .toPromise()
                  .then(res => <Vazhipad[]> res.json(), this.handleError)
                  .then(data => { console.log(data); return data; }); 

   }

               private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  }