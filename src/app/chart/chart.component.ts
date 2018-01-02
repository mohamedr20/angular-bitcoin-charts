import { Component, OnInit,Input,Output} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
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
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent{

}
