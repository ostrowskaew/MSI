import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../dto/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  model: User;
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private router: Router) {
  }


  ngOnInit(): void {
    this.model = {login: '', password: ''};
  }

  onSubmit() {
    this.model.login = this.form.username;
    this.model.password = this.form.password;
    this.authService.logToAccount(this.model).subscribe(
      (tmp) => {
        this.router.navigate(['/home'])
      },
      (err) => {
        alert('Wprowadzono błędne dane!');
        console.log(err);
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }
}
