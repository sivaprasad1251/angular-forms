import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormRegisterService } from '../form-register.service';
import { nameValidator } from '../shared/user-name.validator';



@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

 /* registrationForm= new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    
    address:new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
      pincode: new FormControl(''),
    }),
  });*/

  constructor(private myform: FormBuilder, private regser:FormRegisterService) { }

  registrationForm=this.myform.group({
    userName:['',[Validators.required,Validators.minLength(3),nameValidator(/password/),nameValidator(/admin/),nameValidator(/name/)]],
    password:['',Validators.required],
    confirmPassword:['',Validators.required],
    address:this.myform.group({
      city:[''],
      state:[''],
      pincode:[''],
    })

  })



  ngOnInit(): void {
  }

  displayValues(){
    this.registrationForm.patchValue({
      userName:"testuser",
      password:"testpassword",
      confirmPassword:"testpassword",
      address:{
        city:"testcity",
        state:"teststate",
        pincode:"testpincode"
      }

    })
  }

  onSubmit(registrationForm) {
    console.log(registrationForm.value);

    this.regser.enroll(this.registrationForm.value).subscribe(
      data =>{ 
        console.log('success:',data)
      },
      error => {
        console.log('error:',error)
      }

    );

  }

}
