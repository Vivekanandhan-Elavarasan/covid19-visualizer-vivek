import { Component, OnInit } from '@angular/core';
import { CoviddataService } from '../coviddata.service'

interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  }
];


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  userList;
  tableData;
  tableDataArray;
  arraysample;
  districtname=[];
  activecase;
  countries = COUNTRIES;
  districtArray;
 // districtData = this.tableDataArray;
 // constructor() { }
 constructor(private covidDataService: CoviddataService) {
  this.covidDataService.retiveTableData().subscribe((data) => {
    this.tableData = data;
    console.log("table",data);
    this.tableDataArray = this.tableData["Tamil Nadu"].districtData;
    console.log("Tamil Nadu Array",this.tableDataArray);
    var keys = Object.keys(this.tableDataArray);
    this.userList=keys;
    console.log("keys",keys)
   // console.log("tabledataarray",Object.values(this.tableDataArray));
    this.districtArray=Object.values(this.tableDataArray)
      console.log("DistrictArray",this.districtArray);
    this.activecase = this.tableDataArray.forEach(element => {
      
    });
    console.log("ActiveCases",this.activecase);
  
   // for(var i=0;i<this.tableDataArray.length;i++){
      this.districtname.push(keys[0],keys[1]);
   // }
    console.log(this.districtname);

    /*this.tableDataArray = this.tableDataArray.filter(
      item => item.state === "Tamil Nadu");

      console.log(this.tableDataArray);
      console.log(this.tableDataArray[0].positive)
      for(let i=0;i<this.tableDataArray.length;i++){
        this.tableData=this.tableDataArray[i].positive
     this.arraysample.push(this.tableDataArray[i].positive);
      }
      console.log(this.arraysample);*/
      
  })
    
    /*
    console.log("positive",this.arraysample);*/
    
    
}

  ngOnInit(): void {
  }

}
