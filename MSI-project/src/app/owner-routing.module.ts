import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthInterceptor } from "./interceptors/auth.interceptor";
import { OwnerEquipementDetailComponent } from "./owner/owner-equipement/owner-equipement-detail/owner-equipement-detail.component";
import { OwnerEquipementEditComponent } from "./owner/owner-equipement/owner-equipement-edit/owner-equipement-edit.component";
import { OwnerEquipementComponent } from "./owner/owner-equipement/owner-equipement.component";
import { OwnerSelectEquipementInfoComponent } from "./owner/owner-equipement/owner-select-equipement-info/owner-select-equipement-info.component";

const routes: Routes = [
  { path: '', component: OwnerEquipementComponent,
  children: [
    { path: '', component: OwnerSelectEquipementInfoComponent },
    { path: ':id', component: OwnerEquipementDetailComponent },
    { path: ':id/edit', component: OwnerEquipementEditComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule {

}
