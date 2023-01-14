import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { EventModel } from '../../models/event.model';
import { EventsService } from '../../service/adm-events.service';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.css']
})
export class ListEventsComponent {

  public events$!: Observable<EventModel[]>;
  public events!: EventModel[];

  constructor(
    private eventsService: EventsService,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.getEventsList();
  }

  public getEventsList ():void {
    this.events$ = this.eventsService.getEventsList()
    this.events$.subscribe({next: (event: EventModel[]) => {
      this.events = event} })
  }

  public editEvent(id: string): void {
    this.router.navigate(['/adm/edit', id]);
  }

  public deleteEvent(id: string): void {
    this.eventsService.deleteEvent(id).subscribe();
    this.getEventsList();
  }
}
