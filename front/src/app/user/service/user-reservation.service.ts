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

  // public getReservationById(id: string): Observable<Reservation> {
  //   return this.http.get<Reservation>(`http://localhost:5000/reservations/${id}`);
  // }

  public saveReservation(reservation: Reservation): Observable<any> {
    return this.http.post<any>('http://localhost:5000/reservations', reservation);
  }

  // public editReservation(reservation: Reservation): Observable<any>{
  //   return this.http.put<any>(`http://localhost:5000/reservations/${reservation.id}`, reservation);
  // }

  // public deleteReservation(id: string): Observable<any> {
  //   return this.http.delete<any>(`http://localhost:5000/reservations/${id}`);
  // }
}
