import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup ,FormBuilder,NgForm,FormControlName,Validators  } from '@angular/forms';


@Component({

 selector: 'app-home',

 templateUrl: './home.component.html',

 styleUrls: ['./home.component.css']

})

export class HomeComponent implements OnInit {

        clickCounter :number = 0;

 
// signupForm:FormGroup;
// firstName:string="";
// lastName:string="";
// email:string="";
// Password:string="";

// constructor(private formbuilder:FormBuilder) {

//   this.signupForm=formbuilder.group({
//     fname:new FormControl(),
//     lname:new FormControl(),
//     email:new FormControl(),
//     password:new FormControl(),


//   });
//   }


  // PostData(signupForm:FormGroup){
  //   console.log(signupForm.controls)

  // }


  info = new FormGroup({

    firstName: new FormControl('',Validators.required),

    lastName: new FormControl('',Validators.required),
 
    age: new FormControl('',Validators.required),
 
    email:new FormControl('',Validators.required)
  });
 
 
  countClick(){
 
          this.clickCounter ++;
 
  }
 
 
  students = [
 
    {
 
      name: "David",
 
      age: 32
 
    },{
 
      name: "jime",
 
      age: 28
 
    },{
 
      name:"sabrina",
 
      age: 26
 
    }
 
  ];
 
  constructor() { }
 
 
  ngOnInit() {
 
  }
 
 
 
  onSubmit(){
 
  // to take the values from the form you can select the property that have the formGroup and then just add .value
      if(this.info.valid){
        var a = this.info.value;
        console.log(a)
      }
    
 
  }



 
}