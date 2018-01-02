import { Component, OnInit,Input,Output} from '@angular/core';
import {BitCoinService} from '../../bitcoin.service';
import {Router,ActivatedRoute} from '@angular/router';

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
  selector: 'daily-chart',
  templateUrl: './daily-chart.component.html',
  styleUrls: ['./daily-chart.component.css']
})
export class DailyChartComponent implements OnInit {
  public lineChartData:Array<any>;
  public currency_name:string;
  public currency_code:string;
  public market_name:string;

  loading:boolean = true;

  ngOnInit(){
    this.route.queryParams
    .subscribe((params)=>{
      this.bitcoin.getDailyBitCoinData(params.market_code,'USD')
      .subscribe((data)=>{
        var dataSet = []
        this.loading = false;
        for(var i=0;i<7;i++){
          dataSet.push(this.formatBitCoinData(data)[i].open)
          console.log(dataSet)
        }
       this.lineChartData = [{data:dataSet,label:'USD'}]
       this.currency_name = this.formatBitCoinData(data)[0].currency_name;
       this.currency_code =  this.formatBitCoinData(data)[0].currency_code;
       this.market_name = this.formatBitCoinData(data)[0].market_name
      })
    })
  }

  constructor(public bitcoin:BitCoinService,private router:Router,private route:ActivatedRoute){
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
      backgroundColor: '#F79B9B',
      borderColor: 'red',
      pointBackgroundColor: 'red',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  private formatBitCoinData(data):DailyBitCoinData[]{
    var weekday = ['Friday','Saturday','Sunday','Monday','Tuesday','Wednesday','Thursday'];
    var result = []
    for(var i=0;i<7;i++){
      var obj = {
        data:data,
        currency_name:data["Meta Data"]["3. Digital Currency Name"],
        currency_code:data["Meta Data"]["2. Digital Currency Code"],
        time_zone:data["Meta Data"]["7. Time Zone"],
        market_name:data["Meta Data"]["5. Market Name"],
        market_code:data["Meta Data"]["4. Market Code"],
        open:Number(data["Time Series (Digital Currency Daily)"][Object.keys(data["Time Series (Digital Currency Daily)"]).slice(0,7)[i]]["1b. open (USD)"]),
        day:weekday[i]
      }
      result.push(obj)
    }
    console.log(result);
    return result;
  }

}
