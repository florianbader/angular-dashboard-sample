import { Component, Input, OnInit } from '@angular/core';

type Data = ({ name: string | undefined, series: Value[] }[]) | undefined;
type Value = ({ name: string | undefined, value: number | null | undefined });

@Component({
    selector: 'app-line-chart-widget',
    templateUrl: 'line-chart-widget.component.html',
    styleUrls: ['line-chart-widget.component.scss'],
})
export class LineChartWidgetComponent implements OnInit {
    public data: Data;
    @Input() public title: string | undefined;
    @Input() public values: Value[] = [];

    public ngOnInit(): void {
        this.data = [{
            name: this.title,
            series: this.values,
        }];
    }
}
