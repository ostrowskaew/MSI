import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Equipement } from 'src/app/models/equipement';
import { EquipementService } from 'src/app/services/equipement.service';

@Component({
  selector: 'app-owner-equipement-list',
  templateUrl: './owner-equipement-list.component.html',
  styleUrls: ['./owner-equipement-list.component.css']
})
export class OwnerEquipementListComponent implements OnInit {
  subscribtionEquipements : Subscription;
  equipements: Equipement[] = []

  constructor(private equipementService: EquipementService) { }

  ngOnInit(): void {
    this.equipements = this.equipementService.getEquipements();

    this.subscribtionEquipements = this.equipementService.equipementsChanged
    .subscribe((Equipements: Equipement[]) => {
      this.equipements = Equipements;
    })
  }

  ngOnDestroy() {
    this.subscribtionEquipements.unsubscribe();
  }

}
