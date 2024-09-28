import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

import { EventLocation } from '../eventlocation';

@Component({
  selector: 'app-event-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing">
        <img
            class="listing-photo"
            [src]="eventLocation.photo"
            alt="Exterior photo of {{ eventLocation.name }}"
            crossorigin
        />
        <h2 class="listing-heading">
            {{ eventLocation.name }}
        </h2>
        <p class="listing-location">
            {{ eventLocation.address }} in {{ eventLocation.area }}
        </p>
        <a [routerLink]="['/details', eventLocation.id]">
            Learn More
        </a>
    </section>
  `,
  styleUrls: ['./event-location.component.css']
})
export class EventLocationComponent {
    @Input() eventLocation!: EventLocation;
}
