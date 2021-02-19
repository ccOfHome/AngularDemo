import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-bind',
  templateUrl: './hello-bind.component.html',
  styleUrls: ['./hello-bind.component.css']
})
export class HelloBindComponent implements OnInit {

  imgSrc = "https://www.baidu.com/img/dong_8f1d47bcb77d74a1e029d8cbb3b33854.gif";

  constructor() { }

  ngOnInit(): void {
  }

  hello() {
    alert('Hello Click');
  }

  show(ev) {
    console.log(ev);
  }

  showEvent(ev) {
    console.log(ev);
    console.log(ev.target);
  }

}
