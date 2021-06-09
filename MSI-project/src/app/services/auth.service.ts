import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { User } from '../dto/user';
import { tap } from 'rxjs/operators';
import { UserLogIn } from '../dto/user-log-in';
import { UserAccount } from '../models/UserAccount';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private endpoint = 'http://localhost:9090/userLogin/logIn';
  private endpointSignUp = 'http://localhost:9090/user';
  userLogin: UserLogIn;
  userDto: User;
  currentUser = new ReplaySubject<UserAccount>(1);
  private isLoggedIn = new BehaviorSubject<boolean>(false);
  private usernameLoggedIn = new BehaviorSubject<string>("");

  constructor(private http: HttpClient, private cookieService: CookieService, private router: Router) { }

  logToAccount(user: User): Observable<UserLogIn> {

    return this.http
      .post<UserLogIn>(`${this.endpoint}`, user)
      .pipe(
        tap((usrLogin) => {
          this.cookieService.set('token', usrLogin.token);
          localStorage.setItem('role', usrLogin.role);
          this.userLogin = usrLogin;
          this.isLoggedIn.next(true);
          this.userDto = user;
          localStorage.setItem('login', this.userDto.login);
          this.usernameLoggedIn.next(this.userDto.login);
          console.log(usrLogin);
          this.getCurrentUser();
          location.reload();
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
          localStorage.setItem('login', this.userDto.login);
          this.usernameLoggedIn.next(this.userDto.login);
          this.getCurrentUser();
        })
      );
  }

  get isSignedIn(): boolean {
    console.log(this.cookieService.get('token'));
    if(this.cookieService.get('token') === "") {
      return false;
    }
    return true;
  }

  get usernameSignedIn(): Observable<string> {
    return this.usernameLoggedIn.asObservable();
  }

  getUser(username: string) : Observable<UserAccount> {
    const url = `${this.endpointSignUp}/${username}`;
    return this.http.get<UserAccount>(url)
      .pipe(tap(
        user => this.currentUser.next(user)
      ));
  }

  getCurrentUser(): Observable<UserAccount> {
    return this.getUser(localStorage.getItem('login'));
  }

  logout(): void {
    this.cookieService.delete('token');
    localStorage.removeItem('role');
    this.isLoggedIn.next(false);
    this.usernameLoggedIn.next("");
    this.router.navigate(['/home']).then(
      () => location.reload()
    );
  }

  getUserRole(): string {
    return this.userLogin.role;
  }
}
