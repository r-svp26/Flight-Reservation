import { Injectable } from '@angular/core';
import {HttpClient,HttpResponse} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ReservationService {

  flightUrl:string="http://localhost:1010/api/findflights";
  flightData:any;
  

  constructor(private _httpClient:HttpClient) { }

  public getFlights(source:string,destination:string,departureDate:string):any{
    console.log("dsdsdsdsdsdsd========>",source,destination,departureDate)
    return this._httpClient.get(this.flightUrl+"?from="+source+"&to="+destination+"&departureDate="+departureDate)
    }

    public getFlight(id:number):any{
      return this._httpClient.get(this.flightUrl+"/"+id).pipe(
        map(resp=>{
          return resp;
          console.log(resp);
        },err=>{
          console.error(err);
        })
      )}
}
