import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-flights',
  templateUrl: './display-flights.component.html',
  styleUrls: ['./display-flights.component.css']
})
export class DisplayFlightsComponent implements OnInit {
  flightDetails: any;
  listOfFlights: any=[];

  constructor(private router:Router) { }
  ngOnInit() {
    this.flightDetails=localStorage.getItem("flightdetails")
    console.log(JSON.parse(this.flightDetails))
    this.listOfFlights=JSON.parse(this.flightDetails)
  }

  public onSelect(id:number):any{
    this.router.navigate(['/passengerDetails'+id])
  }
}
