import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloRouterFirstComponent } from './hello-router-first.component';

describe('HelloRouterFirstComponent', () => {
  let component: HelloRouterFirstComponent;
  let fixture: ComponentFixture<HelloRouterFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloRouterFirstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloRouterFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
