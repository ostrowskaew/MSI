import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { OwnerRoutingModule } from "./owner-routing.module";
import { OwnerEquipementDetailComponent } from "./owner/owner-equipement/owner-equipement-detail/owner-equipement-detail.component";
import { OwnerEquipementEditComponent } from "./owner/owner-equipement/owner-equipement-edit/owner-equipement-edit.component";
import { OwnerEquipementItemComponent } from "./owner/owner-equipement/owner-equipement-list/owner-equipement-item/owner-equipement-item.component";
import { OwnerEquipementListComponent } from "./owner/owner-equipement/owner-equipement-list/owner-equipement-list.component";
import { OwnerEquipementComponent } from "./owner/owner-equipement/owner-equipement.component";
import { OwnerSelectEquipementInfoComponent } from "./owner/owner-equipement/owner-select-equipement-info/owner-select-equipement-info.component";
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RouterModule } from "@angular/router";
import { OwnerRentedComponent } from "./owner/owner-rented/owner-rented.component";

@NgModule({
  declarations: [
    OwnerEquipementComponent,
    OwnerEquipementListComponent,
    OwnerEquipementItemComponent,
    OwnerEquipementDetailComponent,
    OwnerEquipementEditComponent,
    OwnerSelectEquipementInfoComponent,
    OwnerRentedComponent
  ],

  imports: [
    OwnerRoutingModule,
    CommonModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    RouterModule
  ]

})
export class OwnerModule {
}
