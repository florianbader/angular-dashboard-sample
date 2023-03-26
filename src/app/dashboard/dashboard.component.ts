import { Component, Input } from '@angular/core';
import { CompactType, GridsterConfig, GridsterItem, GridType } from 'angular-gridster2';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent {
  private _isEditable: boolean = false;

  public options: GridsterConfig = {};
  public dashboard: GridsterItem[];

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
        cols: 1
      },
      {
        x: 1,
        y: 0,
        rows: 2,
        cols: 2
      }
    ];
  }

  private configureOptions() {
    this.options = {
      gridType: GridType.Fit,
      compactType: CompactType.None,
      displayGrid: 'onDrag&Resize',
      outerMargin: false,
      allowMultiLayer: false,
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
