import { NgModule } from '@angular/core';
import { EventCardComponent } from './event-card/event-card';
import { EventDetailsComponent } from './event-details/event-details';
@NgModule({
	declarations: [EventCardComponent,
    EventDetailsComponent],
	imports: [],
	exports: [EventCardComponent,
    EventDetailsComponent]
})
export class ComponentsModule {}
