import { Injectable } from '@angular/core';
import { EventLocation } from './eventlocation';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

  housingLocationList: EventLocation[] = [
    {
      id: 0,
      name: 'Step Up for Down Syndrome',
      area: 'Lake Eola',
      address: '195 N Rosalind Ave, Orlando, FL 32801',
      photo: `${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
    },
    {
      id: 1,
      name: 'Baldwin Park Event',
      area: 'Baldwin Park',
      address: '2023 Robin Rd, Orlando, FL 32814',
      photo: `${this.baseUrl}/brandon-griggs-wR11KBaB86U-unsplash.jpg`,
    },
    {
      id: 2,
      name: 'Library Event',
      area: 'Downtown',
      address: '101 E Central Blvd, Orlando, FL 32801',
      photo: `${this.baseUrl}/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg`,
    },
    {
      id: 3,
      name: 'Homesteady Housing',
      area: 'Home',
      address: 'Home Testing',
      photo: `${this.baseUrl}/ian-macdonald-W8z6aiwfi1E-unsplash.jpg`,
    },
    {
      id: 4,
      name: 'Happy Homes Group',
      area: 'Thornton Park',
      address: '900 E Washington St',
      photo: `${this.baseUrl}/krzysztof-hepner-978RAXoXnH4-unsplash.jpg`,
    },
    {
      id: 5,
      name: 'Testing fillout',
      area: 'Testing',
      address: '123 Sesame St',
      photo: `${this.baseUrl}/r-architecture-JvQ0Q5IkeMM-unsplash.jpg`,
    },
    {
      id: 6,
      name: 'Testing fillout',
      area: 'Testing',
      address: '123 Sesame St',
      photo: `${this.baseUrl}/phil-hearing-IYfp2Ixe9nM-unsplash.jpg`,
    },
    {
      id: 7,
      name: 'Testing fillout',
      area: 'Testing',
      address: '123 Sesame St',
      photo: `${this.baseUrl}/r-architecture-GGupkreKwxA-unsplash.jpg`,
    },
    {
      id: 8,
      name: 'Testing fillout',
      area: 'Testing',
      address: '123 Sesame St',
      photo: `${this.baseUrl}/saru-robert-9rP3mxf8qWI-unsplash.jpg`,
    },
    {
      id: 9,
      name: 'Testing fillout',
      area: 'Testing',
      address: '123 Sesame St',
      photo: `${this.baseUrl}/webaliser-_TPTXZd9mOo-unsplash.jpg`,
    },
  ];

  getAllEventLocations(): EventLocation[] {
    return this.housingLocationList;
  }

  getEventLocationById(id: number): EventLocation | undefined {
    return this.housingLocationList.find((eventLocation) => eventLocation.id === id);
  }

  // constructor() { }
}
