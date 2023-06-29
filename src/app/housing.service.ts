import { Injectable } from '@angular/core';
import { Housinglocation } from './housinglocation';
import { Person } from './person';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  url = 'http://localhost:3000/locations';
  constructor() {}

  housingLocationList: Housinglocation[] = [];

  // getAllHousingLocations(): Housinglocation[] {
  //   return [...this.housingLocationList];
  // }

  async getAllHousingLocations(): Promise<Housinglocation[]> {
    const data = await fetch(this.url);
    const locationList = (await data.json()) ?? [];
    this.housingLocationList = locationList;
    return locationList;
  }

  // getHousingLocationById(id: number): Housinglocation | undefined {
  //   return this.housingLocationList.find((hl) => hl.id === id);
  // }

  async getHousingLocationById(
    id: number
  ): Promise<Housinglocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
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
