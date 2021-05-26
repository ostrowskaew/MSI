import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EquipmentDetailComponent } from "./rental/rental-equipment/equipment-detail/equipment-detail.component";
import { RentalEquipmentSelectInfoComponent } from "./rental/rental-equipment/rental-equipment-select-info/rental-equipment-select-info.component";
import { RentalEquipmentComponent } from "./rental/rental-equipment/rental-equipment.component";

const routes: Routes = [
  { path: '', component: RentalEquipmentComponent,
  children: [
    { path: '', component: RentalEquipmentSelectInfoComponent },
    { path: ':id', component: EquipmentDetailComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentEquipmentRoutingModule {

}
