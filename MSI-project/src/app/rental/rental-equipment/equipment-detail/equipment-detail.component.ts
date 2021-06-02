import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Equipment } from 'src/app/models/equipment';
import { AuthService } from 'src/app/services/auth.service';
import { EquipementService } from 'src/app/services/equipement.service';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-equipment-detail',
  templateUrl: './equipment-detail.component.html',
  styleUrls: ['./equipment-detail.component.css']
})
export class EquipmentDetailComponent implements OnInit {

  equipementDisplayed: Equipment;
  id: number;
  usernameSub: Subscription;
  login: string;
  isDisabled = true;

  constructor(
    private route: ActivatedRoute,
    private equipementService: EquipementService,
    private router: Router,
    private authService: AuthService,
    private reservationService: ReservationService
    ) { }

  ngOnInit(): void {

    this.usernameSub = this.authService.usernameSignedIn
    .subscribe(user => {
      this.login = user;
    });

    this.route.params
    .subscribe(
      params => {
      this.id = +params['id'];

    console.log(this.id);
      this.equipementService.getEquipment(this.id)
      .subscribe(
        eq => this.equipementDisplayed = eq

      )
    }
    );
  }

  toMenu() {
    this.router.navigate(['/rent-equipment']);
  }

  makeReservation() {
    if(this.login) {
      if( this.reservationService.getSelectedEquipment().length != 0) {
        if(!this.containsObject(this.equipementDisplayed, this.reservationService.getSelectedEquipment())
        && this.equipementDisplayed.lenderInstructor == this.reservationService.getOwnerOfEquipment()) {
          this.reservationService.selectEquipment(this.equipementDisplayed);
          console.log(this.reservationService.getSelectedEquipment());
          this.isDisabled = false;
        }
      }
      else {
        this.reservationService.selectEquipment(this.equipementDisplayed);
          console.log(this.reservationService.getSelectedEquipment());
          this.isDisabled = false;
      }

    }

  }

  endReservation() {
    if(this.login) {
      this.router.navigate(['/rent-equipment-summary']);
    }

  }

   containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
            return true;
        }
    }

    return false;
}

}
