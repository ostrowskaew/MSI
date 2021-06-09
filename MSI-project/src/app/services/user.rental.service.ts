import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, ReplaySubject } from "rxjs";
import { tap } from "rxjs/operators";
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
}