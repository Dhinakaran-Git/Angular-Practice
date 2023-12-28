import { Component, inject } from "@angular/core";
import { HousingLocation } from "../housing.location";
import { HousingService } from "../housing.service";
import { AboutComponent } from "../about/about.component";
import { TemplateDrivenFormsComponent } from "../template-driven-forms/template-driven-forms.component";
import { NavgationcomponentComponent } from "../navgationcomponent/navgationcomponent.component";
import { HousingLocationComponent } from "../housing-location/housing-location.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    CommonModule,
    NavgationcomponentComponent,
    HousingLocationComponent,
    AboutComponent,
    TemplateDrivenFormsComponent,
  ],
  template: `
    <section>
      <input
        type="text"
        placeholder="Filter by city"
        #searchQuery
        (input)="handleSearch(searchQuery.value)"
      />
    </section>
    <section class="results">
      <app-housing-location
        *ngFor="let housingLocation of filteredLocations"
        [housingLocation]="housingLocation"
      ></app-housing-location>
      <app-template-driven-forms></app-template-driven-forms>
      <!-- <app-about></app-about>
      <app-navgationcomponent></app-navgationcomponent> -->
    </section>
  `,
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  filteredLocations: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);

  handleSearch(searchQuery: string) {
    if (searchQuery.trim() !== "") {
      this.filteredLocations = this.filteredLocations.filter((location) => {
        return location.city.toLowerCase().includes(searchQuery.toLowerCase());
      });
    } else {
      this.filteredLocations = this.housingLocationList;
    }
  }
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.filteredLocations = this.housingLocationList;
  }
}
