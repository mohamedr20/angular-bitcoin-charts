import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import {ChartsModule} from 'ng2-charts/ng2-charts'

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent
  ],
  imports: [
    ChartsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
