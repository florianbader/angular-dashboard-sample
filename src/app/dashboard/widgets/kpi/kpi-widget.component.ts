import { Component, Input, OnInit } from '@angular/core';

type Value = string | number | null | undefined;
type Data = ({ name: string | undefined, value: Value }[]) | undefined;

@Component({
    selector: 'app-kpi-widget',
    templateUrl: 'kpi-widget.component.html',
    styleUrls: ['kpi-widget.component.scss'],
})
export class KpiWidgetComponent implements OnInit {
    public data: Data;
    @Input() public title: string | undefined;
    @Input() public value: Value;

    public ngOnInit(): void {
        this.data = [{
            name: this.title,
            value: this.value,
        }];
    }
}
