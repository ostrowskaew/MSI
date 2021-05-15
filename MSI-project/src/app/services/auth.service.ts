import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../dto/user';
import { tap } from 'rxjs/operators';
import { UserLogIn } from '../dto/user-log-in';
import { UserAccount } from '../models/UserAccount';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private endpoint = 'http://localhost:9090/userLogin/logIn';
  private endpointSignUp = 'http://localhost:9090/user';
  userLogin: UserLogIn;
  userDto: User;
  currentUser: UserAccount;
  private isLoggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  logToAccount(user: User): Observable<UserLogIn> {

    return this.http
      .post<UserLogIn>(`${this.endpoint}`, user)
      .pipe(
        tap((usrLogin) => {
          this.cookieService.set('token', usrLogin.token);
          localStorage.setItem('role', usrLogin.role);
          localStorage.setItem('id', usrLogin.id);
          this.userLogin = usrLogin;
          this.isLoggedIn.next(true);
          this.userDto = user;
          console.log(usrLogin);

        })
      );
  }

  signUp(user: any): Observable<any> {

    return this.http
      .post<any>(`${this.endpointSignUp}`, user)
      .pipe(
        tap((usrSignUp) => {
          this.cookieService.set('token', usrSignUp.token);
          localStorage.setItem('role', usrSignUp.role);
          this.userLogin = usrSignUp;
          this.isLoggedIn.next(true);
          this.userDto = user;
        })
      );
  }

  get isSignedIn(): Observable<boolean> {
    return this.isLoggedIn.asObservable();
  }

  logout(): void {
    this.cookieService.delete('token', this.userLogin.token);
    localStorage.removeItem('role');
    this.isLoggedIn.next(false);
  }

  getUserRole(): string {
    return this.userLogin.role;
  }

  public getUser() {
    return JSON.parse(sessionStorage.getItem(USER_KEY));
  }
}
