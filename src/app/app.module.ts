import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { GridsterModule } from 'angular-gridster2';
import { DynamicModule } from 'ng-dynamic-component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BarChartWidgetComponent } from './dashboard/widgets/bar-chart/bar-chart-widget.component';
import { BaseWidgetComponent } from './dashboard/widgets/base-widget/base-widget.component';
import { KpiWidgetComponent } from './dashboard/widgets/kpi/kpi-widget.component';
import { LineChartWidgetComponent } from './dashboard/widgets/line-chart/line-chart-widget.component';

@NgModule({
  declarations: [
    AppComponent,

    DashboardComponent,
    BaseWidgetComponent,
    KpiWidgetComponent,
    LineChartWidgetComponent,
    BarChartWidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    NgbModule,
    GridsterModule,
    NgxChartsModule,
    DynamicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
