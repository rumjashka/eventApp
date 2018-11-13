import { Component } from '@angular/core';
import { CityEvent } from '../../models/city-event';
import { NavParams } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { HomePage } from '../../pages/home/home'
import moment from 'moment';

@Component({
  selector: 'event-details',
  templateUrl: 'event-details.html'
})
export class EventDetailsComponent {
  event: CityEvent;
  eventDate: moment.Moment

  constructor(public navParams: NavParams, public navCtrl: NavController) {
    this.event = navParams.get('data');
    this.eventDate = moment(this.event.dateTime, 'DD-MM-YYYY HH:mm:ss');
  }

  back() {
    this.navCtrl.push(HomePage, {
      data: this.event
    })
  }
}
