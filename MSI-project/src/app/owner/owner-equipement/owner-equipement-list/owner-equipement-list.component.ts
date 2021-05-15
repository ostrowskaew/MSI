import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Equipment } from 'src/app/models/equipment';
import { EquipementService } from 'src/app/services/equipement.service';

@Component({
  selector: 'app-owner-equipement-list',
  templateUrl: './owner-equipement-list.component.html',
  styleUrls: ['./owner-equipement-list.component.css']
})
export class OwnerEquipementListComponent implements OnInit {
  subscribtionEquipements : Subscription;
  equipements: Equipment[] = []

  constructor(private equipementService: EquipementService) { }

  ngOnInit(): void {
    this.subscribtionEquipements = this.equipementService.getEquipments()
    .subscribe((Equipements: Equipment[]) => {
      this.equipements = Equipements;
    })
  }

  ngOnDestroy() {
    this.subscribtionEquipements.unsubscribe();
  }


}
