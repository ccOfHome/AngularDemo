import { Component, OnInit } from '@angular/core';
// 导入响应式表单的组件
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
// 导入自定义校验
import { forbiddenNameValidator } from '../forbiddenName';

@Component({
  selector: 'app-hello-form',
  templateUrl: './hello-form.component.html',
  styleUrls: ['./hello-form.component.css']
})
export class HelloFormComponent implements OnInit {

  user = {name: '', pwd: ''};
  user1 = {name: ''};
  user2 = {name: ''};
  myGroup = {};

  constructor() { }

  ngOnInit(): void {
    // 初始化组件时
    this.myGroup = new FormGroup({
      // 内存对象与DOM的绑定关系
      'name': new FormControl(this.user.name, [
        Validators.required, // 必输项
        Validators.minLength(4),
        // 添加自定义校验
        forbiddenNameValidator(/^Tim/)
      ]),
      'pwd': new FormControl(this.user.pwd, [
        Validators.required, // 必输项
        Validators.minLength(6),
      ]),
    });
  }

  get name() {
    return this.myGroup['name'];
  }

  onSubmit(){

  }

  onSubmit1() {
    console.log(this.myGroup['valid']);
    console.log(this.myGroup['value']);

    // 后续逻辑
    if(this.myGroup['valid']) {
      /* $.ajax({
        url: '',
        data: this.myGroup['value'],
        success: () => {

        }
      }); */
    }
  }

}
