import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-name-child',
  template: `
    <div>{{ name }}---{{ age }}</div>
    <button (click)="changeFaAge()">btn</button>
  `,
})
export class HelloChildComponent implements OnInit {

  @Output() myAgeChange = new EventEmitter();

  @Input() name;
  // @Input() age;

  // 属性拦截
  private _age;
  @Input()
  set age(age: number) {
    console.log('设置age');
    this._age = age || 0;
  }
  get age() {
    console.log('获取age');
    return this._age;
  }

  constructor() {}

  ngOnInit(): void {}

  // 改变age
  changeFaAge() {
    console.log('child age change');
    this.myAgeChange.emit();
  }
}

@Component({
  selector: 'app-hello-father-child',
  template: `
    <app-name-child [name]="name" [age]="age"></app-name-child>
    <app-name-child [name]="name" age></app-name-child>
    <app-name-child [name]="name" [age]="age" (myAgeChange)="changeAge()"></app-name-child>
    <h4>父模板</h4>
    <button (click)="child.changeFaAge()">faBtn->childFn->faFn</button>
    <app-name-child #child [name]="name" [age]="age" (myAgeChange)="changeAge()"></app-name-child>
    <h4>父组件调用@ViewChild()</h4>
    <button (click)="controlChild()">faBtn->childFn->faFn</button>
    <app-name-child #child [name]="name" [age]="age" (myAgeChange)="changeAge()"></app-name-child>
  `,
})
export class HelloFatherChildComponent implements OnInit {
  name = 'Kitty';
  age = 21;

  constructor() {}

  ngOnInit(): void {}

  changeAge() {
    console.log('father age change');
    this.age = 99;
  }

  @ViewChild(HelloChildComponent)
  private child: HelloChildComponent;
  controlChild(){
    this.child.changeFaAge();
  }
}


