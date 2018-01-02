import { Component,ElementRef, OnInit,Output,EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from "rxjs/Observable";
import {BitCoinService} from '../bitcoin.service'
import {ReactiveFormsModule, FormGroup, FormControl,FormBuilder, Validators} from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  errMessage:string;
  constructor(private el:ElementRef,private bitcoin:BitCoinService,private router:Router,private fb:FormBuilder) { 

  }
  bitcoinForm = new FormGroup({
    market_code:new FormControl(),
    currency_code:new FormControl()
  })

  public navigate():Promise<any>{
      let market_code = this.bitcoinForm.value.market_code;
      let currency_code = this.bitcoinForm.value.currency_code;
      return this.router.navigate(['chart'],{queryParams:{market_code:market_code,currency_code:currency_code}})
  }

  /*

  }
{currency_code:"BCH",currency_name:"Bitcoin-Cash"},{
  currency_code:"CANN",currency_name:"CannabisCoin"},
  {currency_code:"BTC",currency_name:"Bitcoin"},
{currency_code:"ETH",currency_name:"Ethereum"}
 {currency_code:"GLD",currency_name:"GoldCoin"}
 {currency_code:"LTC",currency_name:"Litecoin"}
 {currency_code:"DASH",currency_name:"Dash"}
 {currency_code:"XMR",currency_name:"Monero"}
 {currency_code:"XRP",currency_name:"Ripples"}
  */
crypto_currency_list:{currency_code:string,currency_name:string}[]=[
  {currency_code:"BCH",currency_name:"Bitcoin-Cash"},
  {currency_code:"CANN",currency_name:"CannabisCoin"},
  {currency_code:"BTC",currency_name:"Bitcoin"},
  {currency_code:"ETH",currency_name:"Ethereum"},
  {currency_code:"GLD",currency_name:"GoldCoin"},
  {currency_code:"LTC",currency_name:"Litecoin"},
  {currency_code:"DASH",currency_name:"Dash"},
  {currency_code:"XMR",currency_name:"Monero"},
  {currency_code:"XRP",currency_name:"Ripples"}
]

}