import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../dto/user';
import { Role } from '../models/role';
import { UserAccount } from '../models/UserAccount';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  model: any ={};
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  id: number;

  constructor(private authService: AuthService, private router: Router) {
  }


  ngOnInit(): void {
    this.model = {
      login: '',
      password: '',
      email:'',
      description: '',
      instructor:false,
      pricePerHour: 0,
      role: "USER"
    }
  }

  refreshPage(): void {
    window.location.reload();
  }

  onSubmit() {
    this.model.login = this.form.username;
    this.model.password = this.form.password;
    this.model.email = this.form.email;

    this.authService.signUp(this.model).subscribe(
      (tmp) => {
        this.router.navigate(['/home'])
      },
      (err) => {
        alert('Wprowadzono błędne dane!');

        console.log(err);
      }
    );
  }

  createUser(message: string){

  }

  openInfo(message: string): void {


  }

}
