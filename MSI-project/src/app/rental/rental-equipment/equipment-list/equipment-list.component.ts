import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Equipment } from 'src/app/models/equipment';
import { EquipementService } from 'src/app/services/equipement.service';

@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.css']
})
export class EquipmentListComponent implements OnInit {

  subscribtionEquipements : Subscription;
  equipements: Equipment[] = [];
  selected = false;
  equipment : Equipment;
  @Output() selectedChanged: EventEmitter<boolean> = new EventEmitter();


  constructor(
    private equipementService: EquipementService,
    private router: Router
    ) { }

  async ngOnInit() {

    console.log("sel" + this.selected);
    if(!this.selected)
      await this.loadEquipments();

    console.log(this.equipements)
  }

    loadEquipments(): Promise<Equipment[]> {
    return this.equipementService.getEquipments()
    .pipe(
      tap((Equipements : Equipment[]) => {
      this.equipements = Equipements;
    }),
    ).toPromise();
  }

  loadOwnersEquipment(user: string) {
    this.equipementService.getOwnersEquipment(user)
    .subscribe((Equipements: Equipment[]) => {
      this.equipements = Equipements;
    });
  }

  selectedHandler(equipment: Equipment) {
    this.selected = true;
    this.selectedChanged.emit(true);
    this.loadOwnersEquipment(equipment.lenderInstructor);

  }

  toMenu() {
    this.router.navigate(['/rent-equipment']);
    this.selected = false;
    this.selectedChanged.emit(this.selected);
    this.loadEquipments();
  }

}
