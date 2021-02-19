import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloRouterSecondComponent } from './hello-router-second.component';

describe('HelloRouterSecondComponent', () => {
  let component: HelloRouterSecondComponent;
  let fixture: ComponentFixture<HelloRouterSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloRouterSecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloRouterSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
