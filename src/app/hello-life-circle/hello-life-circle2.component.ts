import { AfterViewChecked, Component, OnInit,  } from '@angular/core';

@Component({
    selector: 'app-hello-life2',
    template: `
        <br>
        <input [(ngModel)]="count" />
        {{comment}}
    `,
})
export class HelloLife2Component implements OnInit, AfterViewChecked {

    comment = '';
    count = 0;
    flag = true;

    ngAfterViewChecked(): void {
        console.log("afterViewChecked...");

        // 报错原因： 在视图的钩子里改数据，破坏了单向数据流，造成了死循环
        /* if(this.count > 1000){
            this.comment = 'This is big number';
        } */

        // 解决报错，但是依然会死循环
        /* if(this.count > 1000){
            setTimeout(()=>{
                this.comment = 'This is big number';
            },0);
        } */

        // 解决死循环
        if(this.count > 1000 && this.flag){
            setTimeout(()=>{
                this.comment = 'This is big number';
                this.flag = false;
            },0);
        }
    }

    constructor() { }

    ngOnInit(): void { }
}
