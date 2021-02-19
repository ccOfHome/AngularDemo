/**
 * 路由模块
 */
import { NgModule } from '@angular/core'; // 浏览器适配模块
import { RouterModule, Routes } from '@angular/router';
import { HelloRouterFirstComponent } from './hello-router-first/hello-router-first.component';
import { HelloRouterSecondComponent } from './hello-router-second/hello-router-second.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HelloRouterParamsComponent } from './hello-router-params/hello-router-params.component';

const appRoutes: Routes = [
  // { path: 'hello', component: HelloRouterFirstComponent },
  { path: 'hello2', redirectTo: '/hello', pathMatch: 'full' }, /* 重定向 */
  { path: 'helloeveryone', component: HelloRouterSecondComponent },
  { path: 'routerparams/:id', component: HelloRouterParamsComponent }, /* 带参数路由 */
  /* 子路由 */
  { path: 'hello', component: HelloRouterFirstComponent, 
    children: [
      { path: 'helloeveryone', component: HelloRouterSecondComponent }, // /hello/helloeveryone
      { path: 'routerparams/:id', component: HelloRouterParamsComponent } // /hello/routerparams/:id
    ] 
  }, 
  { path: '**', component: PageNotFoundComponent } /* 通配符路由 */
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: true })],
  exports: [RouterModule],
})

export class AppRoutingModule {}
