import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";

import { EventLocation } from "../eventlocation";
import { EventService } from "../event.service";
import { EventLocationComponent } from "../event-location/event-location.component";

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [CommonModule, EventLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by name" />
        <button class="primary" type="button">
          Search
        </button>
      </form>
    </section>
    <section class="results">
      <app-event-location
      *ngFor="let eventLocation of eventLocationList"
        [eventLocation]="eventLocation"
      ></app-event-location>
    </section>
  `,
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

  eventLocationList: EventLocation[] = [];

  eventService: EventService = inject(EventService);

  constructor() {
    this.eventLocationList = this.eventService.getAllEventLocations();
  };
}
