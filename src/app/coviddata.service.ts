import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoviddataService {

  constructor(private http:HttpClient) { }

  retiveData():Observable<any>{
    return this.http.get("https://api.covid19india.org/data.json")
  
  }
  retiveLineChartData():Observable<any>{
    return this.http.get("https://api.covid19india.org/states_daily.json")
  }

  retiveBarChartData():Observable<any>{
    return this.http.get("https://api.covid19india.org/states_daily.json")
  }

  retiveTableData():Observable<any>{
    return this.http.get("https://api.covid19india.org/state_district_wise.json")
  }
  
}
