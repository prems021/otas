    import {Injectable} from '@angular/core';

@Injectable()
export class Hero {
quantity: number;
pooja_name: string[];
devotee_name: string;
devotee_star: string;
 rate: number;
 amount: number;

  constructor(Values: Object = {})
  
    
   {  
 Object.assign(this, Values);
  
  }
}


    
    
