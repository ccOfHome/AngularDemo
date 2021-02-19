import { Component, Input, OnInit, OnChanges, SimpleChanges, DoCheck } from '@angular/core';

// 父组件
@Component({
  selector: 'app-hello-life-circle',
  template: `
    <button (click)="add()">btn-add</button>
    <app-hello-life-circle-child [num]="num" [age]="age"></app-hello-life-circle-child>
  `,
})
export class HelloLifeCircleComponent implements OnInit {
  
  num = 100;
  age = 12;

  constructor() { }

  ngOnInit(): void {
  }

  add(){
    this.num++;
    this.age++;
  }
}

// 子组件
@Component({
  selector: 'app-hello-life-circle-child',
  template: `
    <div>---{{num}}---{{age}}</div>
    <input type="text">
  `,
})
export class HelloLifeCircleChildComponent implements OnInit, OnChanges, DoCheck {
  
  @Input() num; // 拿到父组件传值
  @Input() age;

  constructor() { }
  
  // SimpleChange 拿到变化的值
  ngOnChanges(changes: SimpleChanges){
    console.log('change', changes);
  }

  ngOnInit(): void { }

  ngDoCheck(): void {
    console.error('DoCheck');
  }


}
