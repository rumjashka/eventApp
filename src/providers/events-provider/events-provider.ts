import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { CityEvent } from '../../models/city-event';

@Injectable()
export class EventsProvider {
  eventsApiUrl = 'https://tsh-app.firebaseio.com/events.json';

  constructor(public http: HttpClient) {
  }

  load(): Observable<CityEvent[]> {
    return this.http.get<CityEvent[]>(this.eventsApiUrl);
  }
}
