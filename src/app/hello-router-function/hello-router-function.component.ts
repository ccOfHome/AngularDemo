import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hello-router-function',
  templateUrl: './hello-router-function.component.html',
  styleUrls: ['./hello-router-function.component.css']
})
export class HelloRouterFunctionComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  // navigateByUrl
  helloUrl(){
    // this.router.navigateByUrl('hello'); // 路由跳转
    this.router.navigateByUrl('hello', {skipLocationChange: true}); // 路由跳转但是路径不变
  }

  // navigate
  helloLink(){
    this.router.navigate(['hello']);
  }

  // 路由传参
  paramsUrl(){
    this.router.navigateByUrl('/hello/routerparams/12');
  }

  paramsLink(){
    this.router.navigate(['hello/routerparams', '13']);
  }

}
