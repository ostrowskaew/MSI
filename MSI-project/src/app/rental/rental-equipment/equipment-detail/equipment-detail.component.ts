import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Equipment } from 'src/app/models/equipment';
import { AuthService } from 'src/app/services/auth.service';
import { EquipementService } from 'src/app/services/equipement.service';

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

  constructor(
    private route: ActivatedRoute,
    private equipementService: EquipementService,
    private router: Router,
    private authService: AuthService
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

    }
  }

}
