import { Component } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EventModel } from 'src/app/admin/models/event.model';
import { EventsService } from 'src/app/admin/service/adm-events.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})

export class ReservationComponent {

  constructor(private eventsService: EventsService, private route: ActivatedRoute) {

  }

  public total!: number;
  public valor!: number;
  public event!: EventModel;

  ngOnInit() {
    this.getValueTicket()
  }

  private getValueTicket(): any {
    let id = this.route.snapshot.params['id'];
    this.eventsService.getEventById(id).subscribe(event => {
        this.valor = event.price;
        this.event = event;
    })
    return this.valor
  }

  public reservationTotal(e: any): number {
    this.total = this.valor * e.target.value;
    return this.total;
  }
}
