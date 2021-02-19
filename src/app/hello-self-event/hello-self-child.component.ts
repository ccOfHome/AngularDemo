import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-self-child',
    template: `
        <button (click)="childAdd()">子组件-btn</button>
    `,
})
export class HelloSelfChild implements OnInit {

    // 获取自定义事件
    @Output() myClick = new EventEmitter();
    // 触发自定义事件
    childAdd() {
        this.myClick.emit();
    }

    constructor() { }

    ngOnInit(): void { }
}
