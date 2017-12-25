import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {HttpClient,HttpHeaders} from '@angular/common/http';

const apiKey ="CM6JRFJY7MOTX7P6";
@Injectable()
export class BitCoinService {

  CNY:string = "hello";
  constructor(private http:HttpClient) { }

  getDailyBitCoinData(symbol,market){
    return this.http.get(`https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=${symbol}&market=${market}&apikey=${apiKey}`)
  }

  getWeeklyBitCoinData(symbol,market){
    return this.http.get(`https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_WEEKLY&symbol=${symbol}&market=${market}&apikey=${apiKey}`)
  }

  getMonthlyBitCoinData(symbol,market){
    return this.http.get(`https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_MONTHLY&symbol=${symbol}&market=${market}&apikey=${apiKey}`)
  }
}
