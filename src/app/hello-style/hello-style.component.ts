import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-style',
  templateUrl: './hello-style.component.html',
  
  // 方式一
  styleUrls: ['./hello-style.component.css'],

  // 方式二
  /* styles: [
    `p{
      font-size: 24px;
    }`,
    `*{
      color: red;
    }`
  ] */
})
export class HelloStyleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
