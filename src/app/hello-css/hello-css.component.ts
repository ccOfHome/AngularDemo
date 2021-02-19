import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-css',
  templateUrl: './hello-css.component.html',
  styleUrls: ['./hello-css.component.css']
})
export class HelloCssComponent implements OnInit {

  cssObj = {'color': 'green', 'font-size': '40px'};

  constructor() { }

  ngOnInit(): void {
  }

}
