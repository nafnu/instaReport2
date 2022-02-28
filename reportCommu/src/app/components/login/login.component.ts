import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  credentials={
    email: null,
    password: null
  }
  
  constructor() {

   }

  ngOnInit() {}

  login(){
    console.log(`credentials ->`, this.credentials);
  }

}
