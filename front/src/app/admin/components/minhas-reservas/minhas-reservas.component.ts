import { MinhaReserva } from './../../models/minha-reserva.model';
import { ReservationService } from '../../../user/service/user-reservation.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { EventModel } from 'src/app/admin/models/event.model';
import { EventsService } from 'src/app/admin/service/adm-events.service';
import { Reservation } from '../../../user/models/reservation.model';

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

  public eventReservation!: EventModel;

  public minhaReserva!: MinhaReserva;
  public minhasReservas: MinhaReserva[] = [];

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

    this.reservations$.subscribe(res => {
      for (let reservation of res) {
        this._eventsService.getEventsList().subscribe(evento => {
          this.eventReservation = evento.find(event => event.id === reservation.eventId) as EventModel

          this.minhaReserva = {
            nameTicket: reservation.name,
            quantityTicket: reservation.quantity,
            title: this.eventReservation.title,
            date: this.eventReservation.date,
            local: this.eventReservation.local,
          }
          console.log(this.minhaReserva)
          this.minhasReservas.push(this.minhaReserva);
        })
      }
    })

    this.reservations$.subscribe({
      next: (reservation: Reservation[]) => {
        this.reservations = reservation
      }
    })
  }

}
