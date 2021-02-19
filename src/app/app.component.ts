// 引入ng核心包的组件
import { Component } from '@angular/core';

/**
 * 模板
 * 
 * 定义组件模板有两种方式：
 * 1、使用templateUrl引入一个html文件
 * 2、使用template + ES6模板字符串``
 */

 /**
  * 样式
  * 
  * 1、使用styleUrls引用css文件
  * 2、使用styles + ES6模板字符串``
  */

// 注解（ES7中叫装饰器）用来定义方法或者类的信息
@Component({
  selector: 'app-root', // 当前组件的引用地址
  templateUrl: './app.component.html', // 组件模板
  // template: `
  //   <h1>Hello，{{title}}</h1>
  // `,
  // styleUrls: ['./app.component.css'] // 组件样式
  styles: [`
    h1{
      color: red;
    }
  `]
})
export class AppComponent { // 组件名称
  title = 'angularDemo123';
}
