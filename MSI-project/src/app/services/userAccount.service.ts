import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserAccount } from "../models/UserAccount";

@Injectable()
export class UserAccountService {
  userAccount : any;
  private endpoint = 'http://localhost:9090/user';

  constructor(private http: HttpClient){}

  updateDescription(description: string, login: string): Observable<any>  {
    const url = `${this.endpoint}/description/${description}/${login}`;
    this.http.post(url, null)
    .subscribe(user => this.userAccount = user);
    return this.userAccount
  }

  updatePricePerHour(pricePerHour: any, login: string): Observable<any>  {
    const url = `${this.endpoint}/price/${pricePerHour}/${login}`;
    this.http.post(url, null)
    .subscribe(user => this.userAccount = user);
    return this.userAccount
  }

  updateRole(role: any, login: string): Observable<any>  {
    const url = `${this.endpoint}/role/${role}/${login}`;
    this.http.post(url, null)
    .subscribe(user => this.userAccount = user);
    return this.userAccount
  }


  updateIsInstructor(isInstructor: any, login: string): Observable<any>  {
    const url = `${this.endpoint}/instructor/${isInstructor}/${login}`;
    this.http.post(url, null)
    .subscribe(user => this.userAccount = user);
    return this.userAccount
  }
}
