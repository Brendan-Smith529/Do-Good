import { Routes } from '@angular/router';
import { EventComponent } from './event/event.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
  {
    path: '',
    component: EventComponent,
    title: 'Event page',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Event details'
  },
];
