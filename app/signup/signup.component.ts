
import { Router } from '@angular/router';
import { User } from './user';
import { Component, OnInit }                  from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  moduleId: module.id,
  selector: 'signup',
  templateUrl: 'signup.component.html',
  styleUrls: [ 'signup.component.css' ]
})
export class SignupComponent  implements OnInit {
  public events: any[] = [];
  active = true;
  myForm: FormGroup;
  hero = new User('Name', ' pass ', 'Dr. What');
  constructor( private router: Router,private fb: FormBuilder ) { 
  }
submitted = false;

   onSubmit() { this.submitted = true;
   // this.buildForms();
   // this.searchChanged();
     }


ngOnInit() {



//   this.buildForm();

   
  

  // this.buildForms();

 //
 this.myForm = this.fb.group({
            name: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
            address: this.fb.group({
                street: ['', <any>Validators.required],
                postcode: ['8000']
            })
        });

       this.formchange();


  }

formchange()
{

 
  const myFormStatusChanges = this.myForm.statusChanges;
        const myFormValueChanges = this.myForm.valueChanges;
        
        myFormStatusChanges.subscribe(x => this.events.push({ event: 'STATUS_CHANGED', object: x }));
        myFormValueChanges.subscribe(x => this.events.push({ event: 'VALUE_CHANGED', object: x }));
    
  
}

save(model: User, isValid: boolean) {
        this.submitted = true;
        console.log(model, isValid);
    }

}



/*

buildForms()
{
 this.myGroup = this.fb.group({
      'username': [this.hero.username, [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(24)
          
        ]
      ],
      'password': [this.hero.password],
      'hint':    [this.hero.hint, Validators.required]
    });

  

    this.myGroup.valueChanges
      .subscribe(data => this.onValueChanged(data));
  //  this.onValueChanged();

}


 










 onValueChanged(data?: any) {
    if (!this.myGroup) { return; }
    const form = this.myGroup;
 




    
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }

 }

  


                                              formErrors = {
                                                'username': '',
                                                'password': ''
                                              };

                                              validationMessages = {
                                                'username': {
                                                  'required':      'Name is required.',
                                                  'minlength':     'Name must be at least 4 characters long.',
                                                  'maxlength':     'Name cannot be more than 24 characters long.'
                                                  
                                                },
                                                'password': {
                                                  'required': 'Power is required.'
                                                }
                                              };


 

}
  

  */
