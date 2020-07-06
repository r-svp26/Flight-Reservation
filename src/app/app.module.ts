import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FindFilghtsComponent } from './flightDetails/find-filghts/find-filghts.component';
import { DisplayFlightsComponent } from './flightDetails/display-flights/display-flights.component';
import { PassengerDetailsComponent } from './flightDetails/passenger-details/passenger-details.component';
import { ConfirmFlightComponent } from './flightDetails/confirm-flight/confirm-flight.component';
import {FormsModule} from '@angular/forms';
import {MatInputModule,MatFormFieldModule, MatCardModule, MatDatepickerModule, MatNativeDateModule, MatButtonModule} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FindFilghtsComponent,
    DisplayFlightsComponent,
    PassengerDetailsComponent,
    ConfirmFlightComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,MatFormFieldModule,
    MatCardModule,MatDatepickerModule,
    MatNativeDateModule,MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
