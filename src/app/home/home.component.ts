import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';

import { Housinglocation } from '../housinglocation';

import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input
          type="text"
          name="searchHome"
          id="searchHome"
          placeholder="Filter by city"
          #filterInput
          (input)="filterInput.value.length <= 0 ? resetFilter() : false"
        />
        <button
          class="primary"
          type="button"
          (click)="filterResult(filterInput.value)"
        >
          Search
        </button>
      </form>
    </section>
    <section class="results">
      <app-housing-location
        *ngFor="let housingLocation of filteredLocationList"
        [housingLocation]="housingLocation"
      ></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  housingService: HousingService = inject(HousingService);
  housingLocationList: Housinglocation[] = [];
  filteredLocationList: Housinglocation[] = [];

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLocationList;
  }

  filterResult(searchTerm: string) {
    this.filteredLocationList =
      this.housingService.getFilteredLocation(searchTerm);
  }

  resetFilter() {
    this.filteredLocationList = this.housingLocationList;
  }
}
