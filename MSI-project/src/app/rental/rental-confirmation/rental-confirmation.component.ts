import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rental-confirmation',
  templateUrl: './rental-confirmation.component.html',
  styleUrls: ['./rental-confirmation.component.css']
})
export class RentalConfirmationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ok() {
    this.router.navigateByUrl('\home');
  }
}
