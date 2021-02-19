import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-self-event',
  template: `
    <button (click)="add()">计数</button>
    <h3>count:{{count}}</h3>
    <!--自定义事件名称myClick-->
    <app-self-child (myClick)="add()"></app-self-child>
  `,
})
export class HelloSelfEventComponent implements OnInit {

  count = 0;

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    this.count++;
  }

}
