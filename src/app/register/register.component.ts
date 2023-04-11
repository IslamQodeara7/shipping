import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
passwordEye:string='password';
passwordEyeCheck:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

}
