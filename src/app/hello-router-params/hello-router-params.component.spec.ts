import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloRouterParamsComponent } from './hello-router-params.component';

describe('HelloRouterParamsComponent', () => {
  let component: HelloRouterParamsComponent;
  let fixture: ComponentFixture<HelloRouterParamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloRouterParamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloRouterParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
