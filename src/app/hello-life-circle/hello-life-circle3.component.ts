import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
    selector: 'app-after-view-father',
    template: `
        <app-after-view-cont>
            <app-after-view-child></app-after-view-child>
        </app-after-view-cont>
    `,
})
export class AfterViewFatherComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}

@Component({
    selector: 'app-after-view-cont',
    template: `
        <div>-- projected content begins --</div>
        <ng-content></ng-content><!--插槽位置-->
        <div>-- projected content ends --</div>
    `
})
export class AfterViewContComponent implements OnInit, AfterViewInit, AfterViewChecked {

    constructor() { }

    ngAfterViewInit(): void {
        console.log('ngAfterViewInit');
    }

    ngAfterViewChecked(): void {
        console.log('ngAfterViewChecked');
    }

    ngOnInit(): void { }
}


@Component({
    selector: 'app-after-view-child',
    template: `
        <input [(ngModel)]="count" />
        ---{{count}}
    `
})
export class AfterViewChildComponent implements OnInit {

    count = 0;

    constructor() { }

    ngOnInit(): void { }
}
