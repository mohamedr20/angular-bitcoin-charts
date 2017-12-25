import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'daily-chart',
  templateUrl: './daily-chart.component.html',
  styleUrls: ['./daily-chart.component.css']
})
export class DailyChartComponent implements OnInit {
  @Input() dailyData;

  constructor() { }

  ngOnInit() {
  }

}
