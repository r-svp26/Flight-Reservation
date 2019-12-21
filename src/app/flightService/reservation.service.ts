import { Injectable } from '@angular/core';
import {HttpClient,HttpResponse} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ReservationService {

  flightUrl:string="http://localhost:2020/flightServices/flights";
  reservationUrl:"http://localhost:2020/flightServices/reservations";
  flightData:any;
 

  constructor(private _httpClient:HttpClient) { }

  public getFlights(from:string,to:string,departureDate:string):any{
    this._httpClient.get(this.flightUrl+"?from"+from+"&to"+to+"departureDate"+departureDate).pipe(
      map(resp=>{
         this.flightData=resp;    // .json();
         console.log(this.flightData);
      },err=>{
        console.error(err);
      })
    )}

    public getFlight(id:number):any{
      return this._httpClient.get(this.flightUrl+"/"+id).pipe(
        map(resp=>{
          return resp;
          console.log(resp);
        },err=>{
          console.error(err);
        })
      )}
    
    public saveReservation(reservation):any{
      this._httpClient.post(this.reservationUrl,reservation).pipe(
        map(resp=>{
          return resp;
          console.log(resp);
        },err=>{
          console.error(err);
        }
        )
      )}

        

}
