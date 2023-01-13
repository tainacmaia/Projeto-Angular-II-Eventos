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
}
