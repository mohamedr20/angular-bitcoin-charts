import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import {ChartsModule} from 'ng2-charts/ng2-charts'
import {BitCoinService} from './bitcoin.service';
import { DailyChartComponent } from './chart/daily-chart/daily-chart.component';
import { MonthlyChartComponent } from './chart/monthly-chart/monthly-chart.component';
import { WeeklyChartComponent } from './chart/weekly-chart/weekly-chart.component';
import {Routes,RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SelectComponent } from './shared/select/select.component';

const appRoutes:Routes = [
  {path:'',pathMatch:'full',component:HomeComponent,children:[
    {path:'daily',component:DailyChartComponent},
    {path:'weekly',component:WeeklyChartComponent},
    {path:'monthly',component:MonthlyChartComponent}
  ]},
  {path:'chart',component:ChartComponent},
  {path:'monthly',component:MonthlyChartComponent},
  {path:'weekly',component:WeeklyChartComponent}
]



@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    DailyChartComponent,
    MonthlyChartComponent,
    WeeklyChartComponent,
    HomeComponent,
    SelectComponent
  ],
  imports: [
    ChartsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [BitCoinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
