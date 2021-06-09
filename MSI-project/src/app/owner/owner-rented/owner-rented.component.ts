import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/rental';
import { UserAccount } from 'src/app/models/UserAccount';
import { UserRentalService } from 'src/app/services/user.rental.service';

@Component({
  selector: 'app-owner-rented',
  templateUrl: './owner-rented.component.html',
  styleUrls: ['./owner-rented.component.css']
})
export class OwnerRentedComponent implements OnInit {

  rentalList: Rental[] = [];
  userLogin: string;
  currentUser : UserAccount;
  display = true;

  constructor(private userRentalService: UserRentalService) { }

  ngOnInit() {
    this.getRentals();
  }

  getRentals() {
    this.userRentalService.getAllRentalsForOwner(localStorage.getItem('login')).subscribe(
      el => this.rentalList = el
    );
  }

  confirmReservation(rental: Rental) {
    rental.status = "zaakceptowana";
    this.updateStatus("zaakceptowana", rental);
    this.display = false;
  }

  rejectReservation(rental: Rental) {
    rental.status = "odrzucona";
    this.updateStatus("odrzucona", rental);
    this.display = false;
  }

  updateStatus(status: string, rental: Rental) : void {
    this.userRentalService.updateStatus(status, rental.id);
  }


}
