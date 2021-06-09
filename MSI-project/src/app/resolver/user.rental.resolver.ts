import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Rental } from "../models/rental";
import { UserRentalService } from "../services/user.rental.service";

@Injectable({ providedIn: 'root' })
export class UserRentalResolver implements Resolve<Rental[]> {

  constructor(private service: UserRentalService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Rental[]>|Promise<any>|any {
    return this.service.getAllRentalsForUser(localStorage.getItem('login'));
  }
}