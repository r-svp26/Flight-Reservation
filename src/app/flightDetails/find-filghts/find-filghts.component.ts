import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ReservationService } from 'src/app/flightService/reservation.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-find-filghts',
  templateUrl: './find-filghts.component.html',
  styleUrls: ['./find-filghts.component.css']
})
export class FindFilghtsComponent implements OnInit {
  getFlight:any=[];
  constructor(private service:ReservationService,private router:Router) { }

  ngOnInit() {
  }
  searchFlights(flightList){
    console.log("xxxxxxxx",flightList)

    let selectedDate =flightList.departureDate
    let month=selectedDate.getMonth()+1
    if(month<10){
      month="0"+month
    }else{
      month=month
    }
    let year=selectedDate.getFullYear()
    let date=selectedDate.getDate()
    if(date<10){
      date="0"+date
    }else{
      date=date
    }
    let newDate=(year+"-"+month+"-"+date).toString()
    console.log("sdfsdfsf",newDate,month)
    this.service.getFlights(flightList.source,flightList.destination,newDate).subscribe(resp=>{
      this.getFlight=resp;
      localStorage.setItem("flightdetails",JSON.stringify(this.getFlight))
      if(this.getFlight){
        this.router.navigate(['/displayFlights'])
      }
      console.log(this.getFlight);
    })
  }
}