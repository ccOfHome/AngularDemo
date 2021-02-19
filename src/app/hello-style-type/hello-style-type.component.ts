import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-hello-style-type',
  templateUrl: './hello-style-type.component.html',
  styleUrls: ['./hello-style-type.component.css'],
  // encapsulation: ViewEncapsulation.ShadowDom, // 不受全局样式影响---不进不出，没有样式能进来，组件样式进不去
  // encapsulation: ViewEncapsulation.None, // 受全局样式影响 --- 能级能出
  encapsulation: ViewEncapsulation.Emulated, // --- 只进不出，全局样式能进来，组件样式出不去
})
export class HelloStyleTypeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
