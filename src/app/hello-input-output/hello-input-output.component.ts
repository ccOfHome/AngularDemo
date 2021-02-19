import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-input-output',
  template: `
    <h3>{{num}}</h3>
    <app-hello-input-child [num]="num" (myChange)="changeNum($event)"></app-hello-input-child>
  `,
})
export class HelloInputOutputComponent implements OnInit {

  num = 12;

  constructor() { }

  ngOnInit(): void {
  }

  // 事件接收载荷 要使用$event
  changeNum(n) {
    console.log(n);
    this.num = 24 * n;
  }

}
