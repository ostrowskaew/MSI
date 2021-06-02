import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Equipment } from 'src/app/models/equipment';
import { AuthService } from 'src/app/services/auth.service';
import { EquipementService } from 'src/app/services/equipement.service';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-RentEquipmentSummary',
  templateUrl: './RentEquipmentSummary.component.html',
  styleUrls: ['./RentEquipmentSummary.component.css']
})
export class RentEquipmentSummaryComponent implements OnInit {

  usernameSub: Subscription;
  login: string;
  reservedEquipment: Equipment[];


  constructor(
    private reservationService: ReservationService,
    private equipmentService: EquipementService,
    private authService: AuthService) { }

  ngOnInit() {
    this.usernameSub = this.authService.usernameSignedIn
    .subscribe(user => {
      this.login = user;
    });
  }

  confirmReservation() {
    console.log("dfnsdn");
  }



}
