import { Component, Input, Type } from '@angular/core';
import { CompactType, GridsterConfig, GridsterItem, GridType } from 'angular-gridster2';
import { BarChartWidgetComponent } from './widgets/bar-chart/bar-chart-widget.component';
import { KpiWidgetComponent } from './widgets/kpi/kpi-widget.component';
import { LineChartWidgetComponent } from './widgets/line-chart/line-chart-widget.component';

interface DashboardItem extends GridsterItem {
  component: Type<unknown>;
  inputs?: any | null | undefined;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent {
  private _isEditable: boolean = false;

  public options: GridsterConfig = {};
  public dashboard: DashboardItem[];

  @Input() public set isEditable(value: boolean) {
    this._isEditable = value;

    this.configureOptions();
  }

  constructor() {
    this.configureOptions();

    this.dashboard = [
      {
        x: 0,
        y: 0,
        rows: 1,
        cols: 1,
        component: KpiWidgetComponent,
        inputs: {
          title: "KPI 1",
          value: "1,234,643"
        }
      },
      {
        x: 1,
        y: 0,
        rows: 1,
        cols: 1,
        component: KpiWidgetComponent,
        inputs: {
          title: "KPI 2",
          value: "88.9%"
        }
      },
      {
        x: 2,
        y: 0,
        rows: 2,
        cols: 3,
        component: LineChartWidgetComponent,
        inputs: {
          title: "Line Chart",
          values: [
            {
              name: "2011",
              value: 123
            },
            {
              name: "2012",
              value: 52
            },
            {
              name: "2013",
              value: 180
            }
          ]
        }
      },
      {
        x: 0,
        y: 1,
        rows: 1,
        cols: 2,
        component: BarChartWidgetComponent,
        inputs: {
          title: "Bar Chart",
          values: [
            {
              name: "2011",
              value: 123
            },
            {
              name: "2012",
              value: 5
            },
            {
              name: "2013",
              value: 180
            }
          ]
        }
      }
    ];
  }

  private configureOptions() {
    this.options = {
      gridType: GridType.Fixed,
      compactType: CompactType.None,
      displayGrid: 'onDrag&Resize',
      outerMargin: false,
      minItemArea: 0,
      minItemRows: 0,
      defaultItemCols: 0,
      defaultItemRows: 0,
      fixedColWidth: 300,
      fixedRowHeight: 200,
      allowMultiLayer: false,
      keepFixedWidthInMobile: true,
      keepFixedHeightInMobile: true,
      swap: true,
      swapWhileDragging: true,
      pushItems: true,
      pushResizeItems: true,
      draggable: {
        enabled: this._isEditable
      },
      resizable: {
        enabled: this._isEditable
      }
    };
  }
}
