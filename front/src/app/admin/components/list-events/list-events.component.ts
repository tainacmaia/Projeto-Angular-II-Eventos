import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { ModalExcluirEventoComponent } from '../../modals/modal-excluir-evento/modal-excluir-evento.component';
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
    private router: Router,
    private dialog: MatDialog,
  ) { }


  ngOnInit(): void {
    this.getEventsLista();
  }

  public getEventsLista ():void {
    this.events$ = this.eventsService.getEventsList()
    this.events$.subscribe({next: (event: EventModel[]) => {
      this.events = event} })
  }

  public editEvent(id: string): void {
    this.router.navigate(['/adm/edit', id]);
  }

  openDialog(userId: string) {
    const dialogRef = this.dialog.open(ModalExcluirEventoComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.deleteEvent(userId)
      }
    });
  }

  public deleteEvent(id: string): void {
    this.eventsService.deleteEvent(id).subscribe((() => {
      console.log(id)
      this.getEventsLista();
      document.location.reload();
    }));
  }
}
