import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, ReplaySubject } from "rxjs";
import { Rental } from "../models/rental";

@Injectable()
export class UserRentalService {

    private endpoint = 'http://localhost:9090/rental';

    rental = new ReplaySubject<Rental[]>(1);

    constructor(private http: HttpClient){}

    getAllRentalsForUser(login: string): Observable<Rental[]> {
        const url = `${this.endpoint}/user/${login}`;

        return this.http.get<Rental[]>(url);
    }

  addRental(rental: any, login: string) :Observable<Rental> {
    const url = `${this.endpoint}/${login}`;
    return this.http.post<any>(url, rental);
  }
}
