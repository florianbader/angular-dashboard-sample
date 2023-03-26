import { Component, Input, OnInit } from '@angular/core';

type Data = ({ name: string | undefined, value: Value }[]) | undefined;
type Value = number | null | undefined;

@Component({
    selector: 'app-bar-chart-widget',
    templateUrl: 'bar-chart-widget.component.html',
    styleUrls: ['bar-chart-widget.component.scss'],
})
export class BarChartWidgetComponent implements OnInit {
    public data: Data;
    @Input() public title: string | undefined;
    @Input() public values: Data;

    public ngOnInit(): void {
        this.data = this.values;
    }
}
