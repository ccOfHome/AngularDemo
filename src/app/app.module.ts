import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

// 引入组件
import { HelloWorldComponent } from './hello-world.component';
import { HelloEveryoneComponent } from './hello-everyone/hello-everyone.component';
import { HelloCssComponent } from './hello-css/hello-css.component';
import { HelloBindComponent } from './hello-bind/hello-bind.component';
import { HelloSelfEventComponent } from './hello-self-event/hello-self-event.component';
import { HelloSelfChild } from './hello-self-event/hello-self-child.component';
import { HelloTwoWayComponent } from './hello-two-way/hello-two-way.component';
import { HelloInputOutputComponent } from './hello-input-output/hello-input-output.component';
import { HelloInputChildComponent } from './hello-input-output/hello-input.component';
import { HelloTemplateComponent } from './hello-template/hello-template.component';
import { HelloSelfDirectiveComponent } from './hello-self-directive/hello-self-directive.component';
import { AppHighlightDirective } from './app.highlight.directive.component';
import { HelloFormComponent } from './hello-form/hello-form.component';
import { ForbiddenValidatorDirective } from './forbidden-name.directive';
import { HelloFormbuilderComponent } from './hello-formbuilder/hello-formbuilder.component';
import { HelloFatherChildComponent, HelloChildComponent } from './hello-father-child/hello-father-child.component';
import { HelloStyleComponent } from './hello-style/hello-style.component';
import { HelloStyleTypeComponent } from './hello-style-type/hello-style-type.component';
import { HelloStyleSelectorComponent } from './hello-style-selector/hello-style-selector.component';
import { LifecycleChildComponent, LifecycleComponent } from './hello.test.component';
import { HelloLifeCircleComponent, HelloLifeCircleChildComponent } from './hello-life-circle/hello-life-circle.component';
import { HelloLife2Component } from './hello-life-circle/hello-life-circle2.component';
import { AfterViewFatherComponent, AfterViewContComponent, AfterViewChildComponent } from './hello-life-circle/hello-life-circle3.component';
import { HelloPipeComponent } from './hello-pipe/hello-pipe.component';
import { MywordPie } from './hello-pipe/hello-self-pipe';
// 全局注入服务
import { UserListService } from './service/user.service';

import { HelloUserListComponent } from './hello-user-list/hello-user-list.component';

import { LoggerService } from './service/LoggerService';
import { LoggerBetterService } from './service/LoggerBetterService';

// http服务
import { HttpClientModule } from '@angular/common/http';
import { HelloHttpClientComponent } from './hello-http-client/hello-http-client.component';

// 路由
// import { Routes, RouterModule } from '@angular/router';

import { HelloRouterFirstComponent } from './hello-router-first/hello-router-first.component';
import { HelloRouterSecondComponent } from './hello-router-second/hello-router-second.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HelloRouterParamsComponent } from './hello-router-params/hello-router-params.component';

// 导入路由模块
import { AppRoutingModule } from './app-routing.module';
import { HelloRouterFunctionComponent } from './hello-router-function/hello-router-function.component';

// // 路由配置
// const appRoutes: Routes = [
//   // { path: 'hello', component: HelloRouterFirstComponent },
//   { path: 'hello2', redirectTo: '/hello', pathMatch: 'full' }, /* 重定向 */
//   { path: 'helloeveryone', component: HelloRouterSecondComponent },
//   { path: 'routerparams/:id', component: HelloRouterParamsComponent }, /* 带参数路由 */
//   /* 子路由 */
//   { path: 'hello', component: HelloRouterFirstComponent, 
//     children: [
//       { path: 'helloeveryone', component: HelloRouterSecondComponent }, // /hello/helloeveryone
//       { path: 'routerparams/:id', component: HelloRouterParamsComponent } // /hello/routerparams/:id
//     ] 
//   }, 
//   { path: '**', component: PageNotFoundComponent } /* 通配符路由 */
// ];

let silentLogger = {
  log: (text) => {
    console.log(`Logger: ${text} `+new Date().toLocaleString());
    console.log('Silent logger, Provided via "useValue"');
  }
}
@NgModule({
  declarations: [ // 声明模块中拥有的视图类
    AppComponent,
    HelloWorldComponent,
    HelloEveryoneComponent,
    HelloCssComponent,
    HelloBindComponent,
    HelloSelfEventComponent, // 使用组件时必须先声明
    HelloSelfChild,
    HelloTwoWayComponent,
    HelloInputOutputComponent,
    HelloInputChildComponent,
    HelloTemplateComponent,
    HelloSelfDirectiveComponent,
    AppHighlightDirective,
    HelloFormComponent,
    ForbiddenValidatorDirective,
    HelloFormbuilderComponent,
    HelloFatherChildComponent,
    HelloChildComponent,
    HelloStyleComponent,
    HelloStyleTypeComponent,
    HelloStyleSelectorComponent,
    LifecycleChildComponent,
    LifecycleComponent,
    HelloLifeCircleComponent,
    HelloLifeCircleChildComponent,
    HelloLife2Component,
    AfterViewFatherComponent,
    AfterViewContComponent,
    AfterViewChildComponent,
    HelloPipeComponent,
    MywordPie,
    HelloUserListComponent,
    HelloHttpClientComponent,
    HelloRouterFirstComponent,
    HelloRouterSecondComponent,
    PageNotFoundComponent,
    HelloRouterParamsComponent,
    HelloRouterFunctionComponent,
  ],
  exports: [], // declarations的子集
  imports: [ // 本模块声明的组件模板需要的类所在的其它模块
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // RouterModule.forRoot(appRoutes)
    AppRoutingModule
  ],
  providers: [
    UserListService,
    // LoggerService,
    // {provide: LoggerService, useClass: LoggerBetterService}, // 使用新服务代替旧服务
    // {provide: LoggerService, useExisting: LoggerBetterService}, // 类名冲突 useExisting指定别名
    {provide: LoggerService, useValue: silentLogger} // 使用值提供商
  ], // 服务的创建者
  bootstrap: [AppComponent] // 指定应用的主视图（跟组件）
})
export class AppModule { }
