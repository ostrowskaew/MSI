import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  isLoggedIn = false;
  userSub: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isSignedIn;
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  onLogout() {
    this.authService.logout();
  }

}
