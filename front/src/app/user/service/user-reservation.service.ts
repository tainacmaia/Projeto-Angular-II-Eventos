import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { EventModel } from "src/app/admin/models/event.model";
import { Reservation } from "../models/reservation.model";

@Injectable({
  providedIn: 'root'
})

export class ReservationService {
  constructor(private http: HttpClient) { }

  public getReservationList(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>('http://localhost:5000/reservations');
  }

  public saveReservation(reservation: Reservation): Observable<any> {
    return this.http.post<any>('http://localhost:5000/reservations', reservation);
  }
}
