import { Component, ViewChild, ComponentFactoryResolver, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventCardDirective } from '../../directives/event-card/event-card';
import { EventCardComponent } from '../../components/event-card/event-card';
import { HttpClient } from '@angular/common/http';
import { EventsProvider } from '../../providers/events-provider/events-provider';
import { CityEvent } from '../../models/city-event';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  @ViewChild(EventCardDirective) ecHost: EventCardDirective;
  events: CityEvent[];

  constructor(public navCtrl: NavController, private resolver: ComponentFactoryResolver, private http: HttpClient
    , private eventsProvider: EventsProvider) {

  }

  ngOnInit() {
    this.eventsProvider.load().subscribe(events => {
      this.events = events;
      this.initializeItems(this.events);
    })

  }

  initializeItems(data) {
    let viewContainerRef = this.ecHost.viewContainerRef;
    viewContainerRef.clear();

    console.log(data);

    data.filter((item) => {

      let componentFactory = this.resolver.resolveComponentFactory(EventCardComponent);
      let viewContainerRef = this.ecHost.viewContainerRef;
      let eventCardComponentRef = viewContainerRef.createComponent(componentFactory);
      (<EventCardComponent>eventCardComponentRef.instance).event = item;
    });
  }

  getItems(ev) {
    let val = ev.target.value;
    let data;

    if (val && val.trim() != '') {
      data = this.events.filter((item) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      data = this.events;
    }

    this.initializeItems(data);
  }
}




