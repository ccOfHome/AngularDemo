// ng generate component hello-everyone创建组件
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-everyone',
  templateUrl: './hello-everyone.component.html',
  styleUrls: ['./hello-everyone.component.css']
})
export class HelloEveryoneComponent implements OnInit {

  flag = true;
  citys = ['上海', '北京', '杭州'];
  fruits = [
    {id:1, name:'apple'},
    {id:2, name:'bananer'},
    {id:3, name:'orange'}
  ];
  char = 'A';

  constructor() { }

  ngOnInit(): void {
  }

  trackByIndex(index: number) : number {
    return index+1;
  }

}
