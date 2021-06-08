import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Equipment } from 'src/app/models/equipment';
import { AuthService } from 'src/app/services/auth.service';
import { ReservationService } from 'src/app/services/reservation.service';
import {NgbCalendar, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-RentEquipmentSummary',
  templateUrl: './RentEquipmentSummary.component.html',
  styleUrls: ['./RentEquipmentSummary.component.css']
})
export class RentEquipmentSummaryComponent implements OnInit {

  usernameSub: Subscription;
  login: string;
  reservedEquipment: Equipment[];
  equipements: Equipment[] = [];
  public value: Date = new Date();

  model: NgbDateStruct;

  constructor(
    private reservationService: ReservationService,
    private router: Router,
    private authService: AuthService,
    private calendar: NgbCalendar) { }

  ngOnInit() {
    this.usernameSub = this.authService.usernameSignedIn
    .subscribe(user => {
      this.login = user;
    });

    this.getRentedEquipment();
    console.log("dsbfsdf");
    console.log(this.equipements);
  }

  getRentedEquipment() {
    this.equipements = this.reservationService.getSelectedEquipment();
  }

  confirmReservation() {
    console.log("dfnsdn");
  }

  clear() {
    this.reservationService.clear();
    this.router.navigateByUrl('/rent-equipment');
  }

  deletedHandler(index: number) {
    this.reservationService.deleteEquipment(index);
    this.getRentedEquipment();
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }


}
