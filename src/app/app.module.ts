import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import {ChartsModule} from 'ng2-charts/ng2-charts'
import {BitCoinService} from './bitcoin.service';
import { DailyChartComponent } from './chart/daily-chart/daily-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    DailyChartComponent
  ],
  imports: [
    ChartsModule,
    HttpClientModule,
    BrowserModule
  ],
  providers: [BitCoinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
