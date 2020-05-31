import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { CoviddataService } from '../coviddata.service'

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {
barChart;
arraysample=[943];
arraysample1=[2368];
  constructor(private covidDataService: CoviddataService) {
    this.covidDataService.retiveBarChartData().subscribe((data) => {
      this.barChart = data;
      console.log("barchart",this.barChart.states_daily);
      for(let i=0;i<this.barChart.states_daily.length;i++){
        this.arraysample.push(this.barChart.states_daily[i].tn);
        this.arraysample1.push(this.barChart.states_daily[i].mh);
      }
      console.log("tamilNadu",this.arraysample);

    })
  }
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{id: 'y-axis-10',position: 'left',}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['today','14/03', '15/03', '16/03', '17/03', '18/03', '19/03', '20/03'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: this.arraysample, label: 'TamilNadu' },
    { data: this.arraysample1, label: 'Maharasatra' }
  ];

 // constructor() { }

  ngOnInit() {
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    this.barChartData[0].data = data;
  }
}
