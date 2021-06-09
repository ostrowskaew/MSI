import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { first, tap } from 'rxjs/operators';
import { Equipment } from 'src/app/models/equipment';
import { UserAccount } from 'src/app/models/UserAccount';
import { AuthService } from 'src/app/services/auth.service';
import { EquipementService } from 'src/app/services/equipement.service';

@Component({
  selector: 'app-owner-equipement-list',
  templateUrl: './owner-equipement-list.component.html',
  styleUrls: ['./owner-equipement-list.component.css']
})
export class OwnerEquipementListComponent implements OnInit {
  subscribtionEquipements : Subscription;
  equipements: Equipment[] = [];
  selected = false;
  @Output() selectedChanged: EventEmitter<boolean> = new EventEmitter();
  usernameSub: Subscription;
  login: string;
currentUser: UserAccount;

  constructor(
    private equipementService: EquipementService,
    private authService: AuthService,
    private readonly route: ActivatedRoute
    ) { }

   async ngOnInit() {

    this.currentUser = await this.getUser();


   console.log(this.currentUser);

    this.equipementService.getOwnersEquipment(this.login)
    .subscribe((Equipements: Equipment[]) => {
      this.equipements = Equipements;
    });

    console.log(this.equipements);

  }

  getUser(){

      return this.authService.getCurrentUser().pipe(
        tap(
          user => {this.login = user.login;
          }
        ),first())
        .toPromise()
  }

  selectedHandler(selected: boolean) {
    this.selected = selected;
    this.selectedChanged.emit(selected);
    console.log("List:" + this.selected);

  }

}
