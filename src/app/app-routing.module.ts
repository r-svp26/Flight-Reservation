import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FindFilghtsComponent } from './flightDetails/find-filghts/find-filghts.component';
import { DisplayFlightsComponent } from './flightDetails/display-flights/display-flights.component';
import { PassengerDetailsComponent } from './flightDetails/passenger-details/passenger-details.component';
import { ConfirmFlightComponent } from './flightDetails/confirm-flight/confirm-flight.component';


const routes: Routes = [
  {path:'',redirectTo:'findFlights',pathMatch:'full'},

  {
    path:'findFlights',
    component:FindFilghtsComponent
  },
  {
    path:'displayFlights',
    component:DisplayFlightsComponent
  },
  {
    path:'passengerDetails/:id',
    component:PassengerDetailsComponent
  },
  {
    path:'confirmFlights?:id',
    component:ConfirmFlightComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
