import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-find-filghts',
  templateUrl: './find-filghts.component.html',
  styleUrls: ['./find-filghts.component.css']
})
export class FindFilghtsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  searchFlights(valueOfFlight){
    console.log("XXXXXXXXXXXXXXXXXXXXXX ======>",valueOfFlight)
  }
}
