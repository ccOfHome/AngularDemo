import { Injectable } from '@angular/core';
import { User } from './user';
import { LoggerService } from './LoggerService';
import { LoggerBetterService } from './LoggerBetterService';

// 服务可选项 不提供服务使用也不报错
import { Optional } from '@angular/core';

@Injectable()
export class UserListService {
  // 模拟数据 ajax获取
  users: User[] = [
    { name: 'zhangsan', age: 10 },
    { name: 'lisi', age: 12 },
    { name: 'Tim', age: 13 },
    { name: 'Tom', age: 14 },
  ];

  // 依赖注入
  /* constructor(private logger: LoggerService) {
    
  } */

  // 更改服务来更改继承的类---不采用
  /* constructor(private logger: LoggerBetterService) {
    
  } */

  // 服务可选项 不提供服务使用也不报错
  constructor(@Optional() private logger: LoggerService) {

  }

  // 返回用户
  /* getUsers(): User[] {
    this.logger.log('取数据啊啊啊啊1');
    return this.users;
  } */

  // 返回用户--- 服务可选项 不提供服务使用也不报错
  getUsers(): User[] {
    if (this.logger) {
        this.logger.log('取数据啊啊啊啊1');
    }
    return this.users;
  }
}
