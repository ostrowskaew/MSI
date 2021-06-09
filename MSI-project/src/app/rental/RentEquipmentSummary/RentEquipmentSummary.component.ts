import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Equipment } from 'src/app/models/equipment';
import { AuthService } from 'src/app/services/auth.service';
import { ReservationService } from 'src/app/services/reservation.service';
import {NgbCalendar, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { UserRentalService } from 'src/app/services/user.rental.service';
import { Rental } from 'src/app/models/rental';
import { UserAccount } from 'src/app/models/UserAccount';
import { RentalForm } from 'src/app/models/rentalForm';
@Component({
  selector: 'app-RentEquipmentSummary',
  templateUrl: './RentEquipmentSummary.component.html',
  styleUrls: ['./RentEquipmentSummary.component.css']
})
export class RentEquipmentSummaryComponent implements OnInit {

  usernameSub: Subscription;
  login: string;
  user: UserAccount;
  reservedEquipment: Equipment[];
  equipements: Equipment[] = [];
  hourChosen: string;
  durationChosen: number = 0 ;
  totalPrice: number = 0;
  duration :number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  hours = ["8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];

  model: NgbDateStruct;

  constructor(
    private reservationService: ReservationService,
    private router: Router,
    private dialog: MatDialog,
    private authService: AuthService,
    private calendar: NgbCalendar,
    private rentalService: UserRentalService) { }

  ngOnInit() {
    this.authService.getCurrentUser().subscribe(user => this.user = user);
    this.authService.getCurrentUser().subscribe(user => this.login = user.login);
    this.getRentedEquipment();

  }

  getRentedEquipment() {
    this.equipements = this.reservationService.getSelectedEquipment();
  }

  confirmReservation() {
    var date = this.checkIfDateIsCorrect();
    this.calculate();
    this.rentalService.addRental({
      "totalPrice" : this.totalPrice,
      "duration" : this.durationChosen,
      "dateRental": date,
      "hourRental": this.hourChosen
    },
      this.login)
    .subscribe(res => console.log(res));
    this.router.navigateByUrl('/rent-confirmation');
  }

  clear() {
    this.reservationService.clear();
    this.router.navigateByUrl('/rent-equipment');
  }

  deletedHandler(index: number) {
    this.reservationService.deleteEquipment(index);
    this.getRentedEquipment();
    this.countSubTotalPrice();
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }

  countSubTotalPrice() {
    let total = 0;
    if(this.equipements) {
      for (let eq of this.equipements) {
       total += eq.pricePerHour;
      }
    }
    this.totalPrice = total * this.durationChosen;
  }

  calculate() {
    this.countSubTotalPrice();
  }

  checkIfDateIsCorrect(){
    var today = new Date();
    var dateStart = new Date(this.model.year, this.model.month -1, this.model.day );
    var formatedDate = this.model.month-1 + "-" + this.model.day + "-"+this.model.year;
    if(dateStart <= today || dateStart == null) {
      this.openInfo("Data nie może być wcześniejsza niż jutro");
      return null;
    }
    else{
      return formatedDate;
    }
  }

  openInfo(message: string): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '350px',
      data: message
    });

  }

}
