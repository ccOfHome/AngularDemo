import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-hello-input-child',
    template: `
        <h3 (click)="childChange()">{{myNum}}</h3>
    `,
})
export class HelloInputChildComponent implements OnInit {

    // @Input() num;
    @Input('num') myNum; // 自定义名称

    // @Output() myChange = new EventEmitter();
    @Output('myChange') myInnerChange = new EventEmitter(); // 自定义名称

    childChange() {
        this.myInnerChange.emit(8); // payload 载荷（传参）
    }

    constructor() { }

    ngOnInit(): void { }
}
