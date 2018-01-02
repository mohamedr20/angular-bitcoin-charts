import { Component, OnInit } from '@angular/core';
import {BitCoinService} from '../../bitcoin.service'
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'weekly-chart',
  templateUrl: './weekly-chart.component.html',
  styleUrls: ['./weekly-chart.component.css']
})
export class WeeklyChartComponent implements OnInit {
  public lineChartData:Array<any>;
  public currency_name:string;
  public currency_code:string;
  public market_name:string;
  loading:boolean = true;
  dataSet:any;
  public lineChartLabels:Array<any>;
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: '#ceffce',
      borderColor: 'green',
      pointBackgroundColor: 'green',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
  ngOnInit(){
    this.route.queryParams
    .subscribe((params)=>{
      console.log(params)
      this.bitcoin.getWeeklyBitCoinData(params.market_code,'USD')
      .subscribe((data)=>{
        var dataSet = []
        this.loading = false;
        for(var i =0;i<8;i++){
          dataSet.push(this.formatBitCoinData(data)[i].open)
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
    private formatBitCoinData(data){
      var result = [];
        this.loading=  false;
        for(var i=0;i<8;i++){
          this.lineChartLabels = Object.keys(data["Time Series (Digital Currency Weekly)"]).slice(0,8);
          var obj = {
            data:data,
            currency_name:data["Meta Data"]["3. Digital Currency Name"],
            currency_code:data["Meta Data"]["2. Digital Currency Code"],
            time_zone:data["Meta Data"]["7. Time Zone"],
            market_name:data["Meta Data"]["5. Market Name"],
            market_code:data["Meta Data"]["4. Market Code"],
            open:Number(data["Time Series (Digital Currency Weekly)"][Object.keys(data["Time Series (Digital Currency Weekly)"]).slice(0,8)[i]]["1b. open (USD)"]),
          }
          result.push(obj)
        }
        return result;
    }

}
