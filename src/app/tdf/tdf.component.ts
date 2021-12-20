import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FormRegisterService } from '../form-register.service';


@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {

  public userModel:User={
    name: '',
    email: '',
    phone: 0,
    gender: '',
    course: '',
    remember: true,


  }

  course=['Angular','React','vue','Bootstrap','MongoDB'];
  submitted = false;
  errorMsg = '';

  constructor(private regService:FormRegisterService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    //console.log(this.userModel);
    this.submitted=true;

    this.regService.enroll(this.userModel).subscribe(
      data => console.log('success!',data),
      err => this.errorMsg=err.statusText
    );
    }

}

