import { HttpClient } from "@angular/common/http";
import { Injectable, EventEmitter } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { tap } from "rxjs/operators";
import { Equipment } from "../models/equipment";
import { EquipmentType } from "../models/equipmentType";

@Injectable()
export class EquipementService {
  selectedEquipement = new Subject<Equipment>();
  equipment : Equipment;
  private endpoint = 'http://localhost:9090/equipment';

  constructor(private http: HttpClient){}

  getEquipments(): Observable<any> {
    return this.http.get(this.endpoint);
  }

    getEquipment(id: number): Observable<Equipment> {
       const url = `${this.endpoint}/${id}`;
       return this.http.get<Equipment>(url)

    }

  selectEquipment(equipement: Equipment) {
    this.selectedEquipement.next(equipement);
  }

  addEquipment(equipement: Equipment): Observable<Equipment> {
    return this.http.post<Equipment>(this.endpoint, equipement);
  }

  deleteEquipment(id: number): void {
    const url = `${this.endpoint}/${id}`;
    this.http.delete<Equipment>(url)
    .subscribe(eq => console.log(eq));
  }

  getOwnersEquipment(lender: string): Observable<any>  {
    const url = `${this.endpoint}/lender/${lender}`;
    return this.http.get(url);
  }


}
