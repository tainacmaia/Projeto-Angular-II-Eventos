import { ReservationService } from './../../service/user-reservation.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { EventModel } from 'src/app/admin/models/event.model';
import { EventsService } from 'src/app/admin/service/adm-events.service';
import { Reservation } from '../../models/reservation.model';

@Component({
  selector: 'app-minhas-reservas',
  templateUrl: './minhas-reservas.component.html',
  styleUrls: ['./minhas-reservas.component.css']
})
export class MinhasReservasComponent {

  public events$!: Observable<EventModel[]>;
  public events!: EventModel[];
  public reservations$!: Observable<Reservation[]>;
  public reservations!: Reservation[];


  constructor(
    private _eventsService: EventsService,
    private _reservationService: ReservationService,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.getEventsList();
  }

  public getEventsList(): void {
    this.reservations$ = this._reservationService.getReservationList()
    this._eventsService.getEventsList().subscribe(event => {
      this.events = event
    })

    // this.reservations$.pipe(tap(reservations => {
    //   return reservations.map(reservation => {
    //     reservation.titleShow = this.events.find(event => event.id == reservation.eventId)!.title
    //     reservation.dateShow = this.events.find(event => event.id == reservation.eventId)!.date
    //     reservation.localShow = this.events.find(event => event.id == reservation.eventId)!.local
    //   })
    // })).
    this.reservations$.subscribe({
        next: (reservation: Reservation[]) => {
          this.reservations = reservation
        }
      })
  }
}
