import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-hello-router-params',
  template: `
    <div>参数是：{{id}}</div>
  `,
})
export class HelloRouterParamsComponent implements OnInit, DoCheck {

  id;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngDoCheck(): void {
    this.id = this.route.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
     
  }

}
