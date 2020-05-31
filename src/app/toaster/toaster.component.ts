import { Component, OnInit } from '@angular/core';
import {CoviddataService} from '../coviddata.service'

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css']
})
export class ToasterComponent implements OnInit {
  covidDataList;
  constructor(private covidDataService:CoviddataService) { 
    this.covidDataService.retiveData().subscribe((data)=>{
      this.covidDataList = data;
      console.log(this.covidDataList);
      console.log(this.covidDataList.statewise[0]['active']);
    })
  }

  ngOnInit(): void {
  }

}
