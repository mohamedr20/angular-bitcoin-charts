import { Component, OnInit,Input,Output} from '@angular/core';
import {BitCoinService} from '../bitcoin.service';


interface DailyBitCoinData{
  open:string,
  currency_name:string,
  currency_code:string,
  time_zone:string,
  market_name:string,
  market_code:string
  data:string
}

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  public lineChartData:Array<any>;
  ngOnInit(){

  }

  constructor(public bitcoin:BitCoinService){
    this.bitcoin.getDailyBitCoinData('BTC','CNY')
    .subscribe((data)=>{
      var dataSet = []
      for(var i=0;i<7;i++){
        dataSet.push(this.formatBitCoinData(data)[i].open)
      }
     this.lineChartData = [{data:dataSet,label:'BTC'}]
     console.log(this.lineChartData)
    })
  }
  
  // public lineChartData:Array<any> = [
  //   {data:[10200,12000,110000,10000,12300,9000], label: 'BTC'},
  // ];
  public lineChartLabels:Array<any> = ['Friday','Saturday','Sunday','Monday','Tuesday','Wednesday','Thursday'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'blue',
      borderColor: 'red',
      pointBackgroundColor: 'red',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  private formatedDate(date){
    var dd = date.getDate();
    var mm = date.getMonth()+1;
    var yyyy = date.getFullYear();
    if(dd<10) {dd='0'+dd}
    if(mm<10) {mm='0'+mm}
    date = yyyy+'-'+mm+'-'+dd;
    return date
 }

  private getWeek(){
    var result = [];
    for(var i=0;i<7;i++){
      var d =new Date();
      d.setDate(d.getDate()-2-i);
      result.push(this.formatedDate(d))
    }
    return result
  }
  private formatBitCoinData(data):DailyBitCoinData[]{
    var weekday = ['Friday','Saturday','Sunday','Monday','Tuesday','Wednesday','Thursday'];
    var result = []
    console.log(data);
    for(var i=0;i<7;i++){
      var obj = {
        data:data,
        currency_name:data["Meta Data"]["3. Digital Currency Name"],
        currency_code:data["Meta Data"]["2. Digital Currency Code"],
        time_zone:data["Meta Data"]["7. Time Zone"],
        market_name:data["Meta Data"]["5. Market Name"],
        market_code:data["Meta Data"]["4. Market Code"],
        open:Number(data["Time Series (Digital Currency Daily)"][this.getWeek()[i]]["1b. open (USD)"]),
        day:weekday[i]
      }
      result.push(obj)
    }
    return result;
  }
}
