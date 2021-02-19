import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloRouterFunctionComponent } from './hello-router-function.component';

describe('HelloRouterFunctionComponent', () => {
  let component: HelloRouterFunctionComponent;
  let fixture: ComponentFixture<HelloRouterFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloRouterFunctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloRouterFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
