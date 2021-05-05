import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  isLoggedIn = false;
  userSub: Subscription;

  constructor() { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  onLogout() {
    //this.authService.logout();
  }

}
