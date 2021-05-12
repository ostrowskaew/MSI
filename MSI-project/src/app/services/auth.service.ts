import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../dto/user';
import { tap } from 'rxjs/operators';
import { UserLogIn } from '../dto/user-log-in';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private endpoint = 'http://localhost:9090/userLogin/logIn';
  userLogin: UserLogIn;
  userDto: User;
  private isLoggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private cookieService: CookieService) { }

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
}
