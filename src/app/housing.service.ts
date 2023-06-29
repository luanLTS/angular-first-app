import { Injectable } from '@angular/core';
import { Housinglocation } from './housinglocation';
import { Person } from './person';
import { retryWhen } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  constructor() {}

  housingLocationList: Housinglocation[] = [
    {
      id: 0,
      name: 'Acme Fresh Start Housing',
      city: 'Chicago',
      state: 'IL',
      photo:
        'https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_640.jpg',
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
    {
      id: 1,
      name: 'A113 Transitional Housing',
      city: 'Santa Monica',
      state: 'CA',
      photo:
        'https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_640.jpg',
      availableUnits: 0,
      wifi: false,
      laundry: true,
    },
    {
      id: 2,
      name: 'Warm Beds Housing Support',
      city: 'Juneau',
      state: 'AK',
      photo:
        'https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_640.jpg',
      availableUnits: 1,
      wifi: false,
      laundry: false,
    },
    {
      id: 3,
      name: 'Homesteady Housing',
      city: 'Chicago',
      state: 'IL',
      photo:
        'https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_640.jpg',
      availableUnits: 1,
      wifi: true,
      laundry: false,
    },
    {
      id: 4,
      name: 'Happy Homes Group',
      city: 'Gary',
      state: 'IN',
      photo:
        'https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_640.jpg',
      availableUnits: 1,
      wifi: true,
      laundry: false,
    },
    {
      id: 5,
      name: 'Hopeful Apartment Group',
      city: 'Oakland',
      state: 'CA',
      photo:
        'https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_640.jpg',
      availableUnits: 2,
      wifi: true,
      laundry: true,
    },
    {
      id: 6,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo:
        'https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_640.jpg',
      availableUnits: 5,
      wifi: true,
      laundry: true,
    },
    {
      id: 7,
      name: 'Hopeful Housing Solutions',
      city: 'Oakland',
      state: 'CA',
      photo:
        'https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_640.jpg',
      availableUnits: 2,
      wifi: true,
      laundry: true,
    },
    {
      id: 8,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo:
        'https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_640.jpg',
      availableUnits: 10,
      wifi: false,
      laundry: false,
    },
    {
      id: 9,
      name: 'Capital Safe Towns',
      city: 'Portland',
      state: 'OR',
      photo:
        'https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_640.jpg',
      availableUnits: 6,
      wifi: true,
      laundry: true,
    },
  ];

  getAllHousingLocations(): Housinglocation[] {
    return [...this.housingLocationList];
  }

  getHousingLocationById(id: number): Housinglocation | undefined {
    return this.housingLocationList.find((hl) => hl.id === id);
  }

  getFilteredLocation(searchTerm: string) {
    return this.housingLocationList.filter((hl) =>
      hl?.city.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  submitApplication(person: Person) {
    console.log(
      `Homes application received: firstName: ${person.firstName}, lastName: ${person.lastName}, email: ${person.email}.`
    );
  }
}
