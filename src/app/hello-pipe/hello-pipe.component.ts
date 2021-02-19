import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-pipe',
  template: `
    <p>The double 11 day is {{ birthday | date }}</p>
    <p>The double 11 day is {{ birthday | date: 'yyyy-MM-dd' }}</p>
    <p>The double 11 day is {{ birthday | date: format }}</p>
    <button (click)="toggle()">toggle</button>
    <!--多级管道-->
    <p>The double 11 day is {{ birthday | date | uppercase }}</p>
    <!--自定义管道-->
    <p>The double 11 day is {{ birthday | date | myword }}</p>
    <p>The double 11 day is {{ birthday | date : 'yyyy-MM-dd' | myword : '>>>--' : '-->' }}</p>
  `,
})
export class HelloPipeComponent implements OnInit {

  birthday = new Date(2017,10,11); //Dec 11, 2017

  flag = true;

  get format(){
    return this.flag ? 'yyyy-MM-dd' : 'yyyy/MM/dd';
  }

  toggle(){
    this.flag = !this.flag;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
