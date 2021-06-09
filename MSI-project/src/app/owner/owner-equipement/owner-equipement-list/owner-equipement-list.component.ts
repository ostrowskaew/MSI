import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Equipment } from 'src/app/models/equipment';
import { AuthService } from 'src/app/services/auth.service';
import { EquipementService } from 'src/app/services/equipement.service';

@Component({
  selector: 'app-owner-equipement-list',
  templateUrl: './owner-equipement-list.component.html',
  styleUrls: ['./owner-equipement-list.component.css']
})
export class OwnerEquipementListComponent implements OnInit, OnDestroy {
  subscribtionEquipements : Subscription;
  equipements: Equipment[] = [];
  selected = false;
  @Output() selectedChanged: EventEmitter<boolean> = new EventEmitter();
  usernameSub: Subscription;
  login: string;


  constructor(
    private equipementService: EquipementService,
    private authService: AuthService
    ) { }

  ngOnInit(): void {

    this.authService.getCurrentUser().subscribe(user => this.login = user.login);

    this.subscribtionEquipements = this.equipementService.getOwnersEquipment(this.login)
    .subscribe((Equipements: Equipment[]) => {
      this.equipements = Equipements;
    });

  }

  selectedHandler(selected: boolean) {
    this.selected = selected;
    this.selectedChanged.emit(selected);
    console.log("List:" + this.selected);

  }

  ngOnDestroy() :void {
    this.subscribtionEquipements.unsubscribe();

  }

}
