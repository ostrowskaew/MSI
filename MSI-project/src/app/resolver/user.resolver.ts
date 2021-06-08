import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { UserAccount } from "../models/UserAccount";
import { AuthService } from "../services/auth.service";

@Injectable({ providedIn: 'root' })
export class UserResolver implements Resolve<UserAccount> {

  constructor(private service: AuthService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<UserAccount>|Promise<any>|any {
    return this.service.getCurrentUser();
  }
}