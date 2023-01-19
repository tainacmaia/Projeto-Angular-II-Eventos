import { ModalReservaConfirmadaComponent } from './../../modals/modal-reserva-confirmada/modal-reserva-confirmada.component';
import { MatDialog } from '@angular/material/dialog';
import { Reservation } from './../../models/reservation.model';
import { Component } from '@angular/core';
import { FormControl, FormGroup, NumberValueAccessor, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventModel } from 'src/app/admin/models/event.model';
import { EventsService } from 'src/app/admin/service/adm-events.service';
import { ReservationService } from '../../service/user-reservation.service';
import { Observable, tap } from 'rxjs';
import { ModalConfirmarReservaComponent } from '../../modals/modal-confirmar-reserva/modal-confirmar-reserva.component';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})

export class ReservationComponent {

  constructor(private eventsService: EventsService, private route: ActivatedRoute, private reservationService: ReservationService, private router: Router, private dialog: MatDialog) {}

  public total!: number;
  public valor!: number;
  public event!: EventModel;
  public form!: FormGroup;
  public id!: string
  public events!: EventModel[];


  public reservation!: Reservation;


  public reservations$!: Observable<Reservation[]>;
  public reservations!: Reservation[];


  ngOnInit() {
    this.getValueTicket()
    this.buildForm();
    this.getEventsList();
  }

  private getValueTicket(): any {
   this.id = this.route.snapshot.params['id'];
    this.eventsService.getEventById(this.id).subscribe(event => {
        this.valor = event.price;
        this.event = event;
    })
    return this.valor
  }


  public getEventsList(): void {
    this.reservations$ = this.reservationService.getReservationList()
    this.eventsService.getEventsList().subscribe(event => {
      this.events = event
    })
  }


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

  openDialog() {
    const dialogRef = this.dialog.open(ModalConfirmarReservaComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.onSubmit();
        this.router.navigate(['/user']);
      }
    });
  }


  public onSubmit():void {
    const reservationForm = this.form.getRawValue();

    this.reservation = {
      eventId: this.id,
      name: reservationForm.name,
      quantity: reservationForm.quantity
    }

    this.reservationService.saveReservation(this.reservation).subscribe(() => {
        this.form.reset();


        const dialogRefConfirmReservation = this.dialog.open(ModalReservaConfirmadaComponent);
        dialogRefConfirmReservation.afterClosed().subscribe(() => {
            this.router.navigate(['/user']);
        });
      });

  }
}
