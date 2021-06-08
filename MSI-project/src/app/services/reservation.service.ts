import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Equipment } from "../models/equipment";

@Injectable()
export class ReservationService {
  selectedEquipmentChanged = new Subject<Equipment[]>();
  selectedEquipment : Equipment[] = [];

  constructor(private http: HttpClient){}

  selectEquipment(equipment: Equipment) {
    this.selectedEquipment.push(equipment);
    this.selectedEquipmentChanged.next(this.selectedEquipment.slice());
  }

  getSelectedEquipment() {
    return this.selectedEquipment.slice();
  }

  getSelectedEquipmentItem(id: number): Equipment {
    return this.selectedEquipment[id];
  }

  getOwnerOfEquipment(): string {
    return this.selectedEquipment[0].lenderInstructor;
  }

  deleteEquipment(index: number) {
    this.selectedEquipment.splice(index, 1);
    this.selectedEquipmentChanged.next(this.selectedEquipment.slice());
  }

  clear(){
    this.selectedEquipment = [];
    this.selectedEquipmentChanged.next(this.selectedEquipment.slice());
  }

}
