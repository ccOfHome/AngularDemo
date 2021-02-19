import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-template',
  templateUrl: './hello-template.component.html',
  styleUrls: ['./hello-template.component.css']
})
export class HelloTemplateComponent implements OnInit {

  // 绑定输入框的值
  text = '';
  people = null;

  constructor() { }

  ngOnInit(): void {
  }

  show() {
    console.log(this.text);
  }

  show2(val) {
    console.log(val);
  }

}
