import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { first, tap } from 'rxjs/operators';
import { UserAccount } from '../models/UserAccount';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  currentUser: UserAccount;
  isLoggedIn = false;
  userSub: Subscription;


  constructor(private authService: AuthService) { }

  async ngOnInit() {
    this.currentUser = await this.getUser();
    this.isLoggedIn = this.authService.isSignedIn;
  }

  getUser(){
    return this.authService.getCurrentUser().pipe(
      tap(
        user => {this.currentUser = user;
        }
      ),first())
      .toPromise()
}

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  onLogout() {
    this.authService.logout();
  }

}
