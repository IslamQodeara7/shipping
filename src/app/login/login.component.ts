import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  passwordEyeCheck:boolean=false;
  passwordEye:string='password';
  constructor() { }

  ngOnInit(): void {
  }

}
