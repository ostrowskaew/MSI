import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  id: number;

  constructor(
  ) {
  }


  ngOnInit(): void {
  }

  refreshPage(): void {
    window.location.reload();
  }

  onSubmit() {

  }

  createUser(message: string){

  }

  openInfo(message: string): void {


  }

}
