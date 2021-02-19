import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-hello-http-client',
  template: `
    <ul>
      <li *ngFor="let res of results">
        {{ res.name }} -- {{ res.age }}
      </li>
    </ul>
  `,
})
export class HelloHttpClientComponent implements OnInit {

  results : any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // 请求数据
    let url = 'http://localhost:8090/user';
    // subscribe处理返回数据 + 错误处理一
    /* this.http.get(url).subscribe(data => {
      console.log(data);
      this.results = data; // 取数据
    }, error => {
      console.error('出错了...');
    }); */

    // 获取完整的响应 + 错误处理二
    /* this.http.get(url, { observe: 'response' }).subscribe(data => {
      console.log(data);
      this.results = data.body; // 取数据
    },  (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log('客户端出错:', err.error.message);
      } else {
        console.log(`服务器返回码 ${err.status}, 返回 html: ${err.error}`);
      }
    }); */

    // .retry操作符
    /* this.http.get(url, { observe: 'response' }).pipe(retry(3)).subscribe(data => {
      console.log(data);
      this.results = data.body; // 取数据
    },  (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log('客户端出错:', err.error.message);
      } else {
        console.log(`服务器返回码 ${err.status}, 返回 html: ${err.error}`);
      }
    }); */

    // 请求非json数据responseType
    /* let url1 = "http://localhost:8090";
    this.http.get(url1, { responseType: 'text' }).subscribe(data => {
      console.log(data);
    }); */

    // GET传参
    /* let url2 = 'http://localhost:8090/user/add?num=2';
    let user = {name:'Tim'};
    this.http.get(url2,{params: user}).subscribe(data=>{
      console.log(data);
    }); */

    // POST传参
    let url3 = 'http://localhost:8090/user/update';
    let user3 = {name:'Tim'};
    this.http.post(url3, user3, {params: new HttpParams().set('id','1')}).subscribe(data=>{
      console.log(data);
    });

  }

}
