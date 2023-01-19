import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { EventModel } from "../models/event.model";

@Injectable({
  providedIn: 'root'
})

export class EventsService {
  constructor(private http: HttpClient) { }

  public getEventsList(): Observable<EventModel[]> {
    return this.http.get<EventModel[]>('http://localhost:5000/events');
  }

  public getEventById(id: string): Observable<EventModel> {
    return this.http.get<EventModel>(`http://localhost:5000/events/${id}`);
  }

  public saveEvent(event: EventModel): Observable<any> {
    return this.http.post<any>('http://localhost:5000/events', event);
  }

  public editEvent(event: EventModel): Observable<any>{
    return this.http.put<any>(`http://localhost:5000/events/${event.id}`, event);
  }

  public deleteEvent(id: string): Observable<any> {
    this.getEventById(id).subscribe(data => {
      console.log(data);
    })
    return this.http.delete<any>(`http://localhost:5000/events/${id}`);
  }
}
