import { Component, OnInit } from '@angular/core';
import { UserListService } from '../service/user.service';
import { User } from '../service/user';

@Component({
  selector: 'app-hello-user-list',
  template: `
    <ul>
      <li *ngFor="let user of users">
        姓名：{{user.name}}，年龄：{{user.age}}
      </li>
    </ul>
  `,
  // 局部注册组件
  // providers: [UserListService]
})
export class HelloUserListComponent implements OnInit {

  users: User[] = [];

  // 通过构造器进行依赖注入
  constructor(private userListService: UserListService) {

  }

  ngOnInit(): void {
    // 数据初始化
    this.users = this.userListService.getUsers();
  }

}
