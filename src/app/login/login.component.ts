import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup | any;
  Name: FormControl | any;
  Name1: FormControl | any;
  password: FormControl | any;
  copassword: FormControl | any;
  brand: FormControl | any;
  email: FormControl | any;

  constructor() { }

  ngOnInit(): void {
    this.email = new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]);
  this.Name = new FormControl('',[Validators.required]);
  this.Name1 = new FormControl('',[Validators.required]);
  this.password = new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,16}')]);
  this.copassword = new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,16}')]);
  this.brand = new FormControl('', Validators.required);
  this.myForm = new FormGroup({
    'email':this.email,
    'Name': this.Name,
    'copassword': this.copassword,
    'password': this.password,
    'brand': this.brand,
    'Name1': this.Name1
  });

  }

}
