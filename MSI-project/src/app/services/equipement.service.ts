import { Injectable, EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { Equipment } from "../models/equipment";
import { EquipmentType } from "../models/equipmentType";

@Injectable()
export class EquipementService {
  selectedEquipement = new Subject<Equipment>();
  equipementsChanged = new Subject<Equipment[]>();


  private equipements: Equipment[] = [
    new Equipment(1, "data:image/jpeg;base64,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" ,"Core", "Model1" ,40, 1, "10m2", "kite", "2020", EquipmentType.KITE),
    new Equipment(2, "https://www.surfpm.com/image/cache/data/core/2017/kiteboards/Untitled-2-750x750.jpg","Core","Model2" ,20, 2, "120cm", "board", "2010", EquipmentType.KITEBOARD),
    new Equipment(3, "https://www.windsurf.co.uk/wp-content/uploads/2018/06/North-E-Type-681px-631x420.jpg","North","Model3",50, 2, "4.5m2", "sail", "2012", EquipmentType.SAIL)
  ];

  getEquipements() {
    return this.equipements.slice();
  }

  getEquipement(id: number): Equipment {
    return this.equipements[id];
  }

  selectEquipement(equipement: Equipment) {
    this.selectedEquipement.next(equipement);
  }

  addEquipement(newEquipement: Equipment) {
    this.equipements.push(newEquipement);
    this.equipementsChanged.next(this.equipements.slice());
  }

  addEquipements(newEquipements: Equipment[]) {
    this.equipements = newEquipements;
    this.equipementsChanged.next(this.equipements.slice());
  }

  updateEquipement(index: number, newEquipement: Equipment) {
    this.equipements[index] = newEquipement;
    this.equipementsChanged.next(this.equipements.slice());
  }

  deleteEquipement(index: number) {
    this.equipements.splice(index, 1);
    this.equipementsChanged.next(this.equipements.slice());
  }


}
