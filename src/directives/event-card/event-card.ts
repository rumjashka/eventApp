import { Directive, ViewContainerRef } from '@angular/core';


@Directive({
  selector: '[event-card]'
})
export class EventCardDirective {

  constructor(public viewContainerRef: ViewContainerRef) {
  }

}
