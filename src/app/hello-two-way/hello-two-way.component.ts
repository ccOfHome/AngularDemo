import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-two-way',
  templateUrl: './hello-two-way.component.html',
  styleUrls: ['./hello-two-way.component.css']
})
export class HelloTwoWayComponent implements OnInit {

  text = "hello";
  num = 0;

  constructor() { }

  ngOnInit(): void {
  }

  changeValue(e) {
    this.num=e.target.value;
  }

}
