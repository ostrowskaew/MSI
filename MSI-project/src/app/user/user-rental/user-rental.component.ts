import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Rental } from 'src/app/models/rental';
import { UserAccount } from 'src/app/models/UserAccount';
import { AuthService } from 'src/app/services/auth.service';
import { UserRentalService } from 'src/app/services/user.rental.service';
import { UserAccountService } from 'src/app/services/userAccount.service';
import { Role } from 'src/app/models/role'

@Component({
  selector: 'app-user-rental',
  templateUrl: './user-rental.component.html',
  styleUrls: ['./user-rental.component.css']
})
export class UserRentalComponent implements OnInit {

  rentalList: Rental[] = [];
  userLogin: string;
  currentUser : UserAccount;

  constructor(private userRentalService: UserRentalService) { }

  ngOnInit() {
    this.getRentals();
  }

  getRentals() {
    this.userRentalService.getAllRentalsForUser(localStorage.getItem('login')).subscribe(
      el => this.rentalList = el
    );
  }

}
