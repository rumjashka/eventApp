import { Component} from '@angular/core';
import { CityEvent } from '../../models/city-event';
import { EventDetailsComponent } from '../event-details/event-details'
import { NavController} from 'ionic-angular';



@Component({
  selector: 'event-card',
  templateUrl: 'event-card.html'
})
export class EventCardComponent {
  event: CityEvent;

  constructor(public navCtrl: NavController) {
  }

  details() {
    this.navCtrl.push(EventDetailsComponent, {
      data: this.event

    })
  }
}
