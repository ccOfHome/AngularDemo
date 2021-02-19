// 生命周期

import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle-child',
  template: `
    <div>
      <input type="text" [(ngModel)]="count" />
      <p>count: {{ count }}</p>
    </div>
  `,
})

export class LifecycleChildComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  
  @Input() count;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes...', changes);
  }

  ngOnInit() {
    console.log('init...');
  }

  ngOnDestroy(): void {
    console.log('destory...');
  }

  ngDoCheck(): void {
    console.log('check...');
  }

  ngAfterViewInit(): void {
    console.log('afterViewInit...');
  }

  ngAfterContentChecked(): void {
    console.log('afterContentChecked...');
  }

  ngAfterContentInit(): void {
    console.log('afterContentInit...');
  }
  ngAfterViewChecked(): void {
    console.log('afterViewChecked...');
  }
}

@Component({
  selector: 'app-lifecycle',
  template: ` <div>
    <p>
      <button (click)="changes()">changes</button>
      <button (click)="destroy()">destroy</button>
      <button (click)="init()">init</button>
    </p>
    <div *ngIf="flag">
      <app-lifecycle-child [count]="count"></app-lifecycle-child>
    </div>
  </div>`,
})

export class LifecycleComponent {

  count = 0;
  flag = true;

  changes() {
    this.count++;
  }

  destroy() {
    this.flag = false;
  }

  init() {
    this.flag = true;
  }
}
