import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { RentEquipmentRoutingModule } from "./rent-equipment-routing.module";
import { RentalConfirmationComponent } from "./rental/rental-confirmation/rental-confirmation.component";
import { EquipmentDetailComponent } from "./rental/rental-equipment/equipment-detail/equipment-detail.component";
import { EquipmentItemComponent } from "./rental/rental-equipment/equipment-list/equipment-item/equipment-item.component";
import { EquipmentListComponent } from "./rental/rental-equipment/equipment-list/equipment-list.component";
import { RentalEquipmentSelectInfoComponent } from "./rental/rental-equipment/rental-equipment-select-info/rental-equipment-select-info.component";
import { RentalEquipmentComponent } from "./rental/rental-equipment/rental-equipment.component";
import { RentEquipmentSummaryComponent } from "./rental/RentEquipmentSummary/RentEquipmentSummary.component";

@NgModule({
  declarations: [
    RentalEquipmentComponent,
    RentalEquipmentSelectInfoComponent,
    EquipmentDetailComponent,
    EquipmentListComponent,
    EquipmentItemComponent
  ],

  imports: [
    RentEquipmentRoutingModule,
    CommonModule,
    RouterModule
  ]

})
export class RentEquipmentModule {
}
