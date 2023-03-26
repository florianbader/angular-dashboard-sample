import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-base-widget',
    templateUrl: 'base-widget.component.html',
    styleUrls: ['base-widget.component.scss'],
})
export class BaseWidgetComponent {
    @Input() public title: string | undefined;
}
