import { Reservation } from './../../models/reservation.model';
import { Component } from '@angular/core';
import { FormControl, FormGroup, NumberValueAccessor, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventModel } from 'src/app/admin/models/event.model';
import { EventsService } from 'src/app/admin/service/adm-events.service';
import { ReservationService } from '../../service/user-reservation.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})

export class ReservationComponent {

  constructor(private eventsService: EventsService, private route: ActivatedRoute, private reservationService: ReservationService, private router: Router) {}

  public total!: number;
  public valor!: number;
  public event!: EventModel;
  public form!: FormGroup;

  public events!: EventModel[];
  public reservation!: Reservation;
  public reservations$!: Observable<Reservation[]>;
  public reservations!: Reservation[];


  ngOnInit() {
    this.getValueTicket()
    this.buildForm();
    // this.getEventsList();
  }

  private getValueTicket(): any {
    let id = this.route.snapshot.params['id'];
    this.eventsService.getEventById(id).subscribe(event => {
        this.valor = event.price;
        this.event = event;
        console.log(this.event)
    })
    return this.valor
  }


  // public getEventsList(): void {
  //   this.reservations$ = this.reservationService.getReservationList()
  //   this.eventsService.getEventsList().subscribe(event => {
  //     this.events = event
  //   })

  //   this.reservations$.pipe(tap(reservations => {
  //     return reservations.map(reservation => {
  //       reservation.titleShow = this.events.find(event => event.id == reservation.eventId)!.title
  //       reservation.descriptionShow = this.events.find(event => event.id == reservation.eventId)!.description
  //       reservation.dateShow = this.events.find(event => event.id == reservation.eventId)!.date
  //       reservation.localShow = this.events.find(event => event.id == reservation.eventId)!.local
  //     })
  //   }))
  // }


  public reservationTotal(e: any): number {
    this.total = this.valor * e.target.value;
    return this.total;
  }

  public buildForm():void {
    this.form = new FormGroup({
      id: new FormControl(),
      name: new FormControl(null, [Validators.required]),
      quantity: new FormControl(null, [Validators.required]),
    });
  }

  public onSubmit():void {
    const reservationForm = this.form.getRawValue();

    this.reservation.eventId = this.event.id;
    this.reservation.titleShow = this.event.title;
    this.reservation.dateShow = this.event.date;
    this.reservation.localShow = this.event.local;
    this.reservation.name = reservationForm.name;
    this.reservation.quantity = reservationForm.quantity;

    console.log(this.reservation);
      this.reservationService.saveReservation(this.reservation).subscribe(() => {
        this.form.reset();
        this.router.navigate(['/user/list/events']);
      });

  }
}
