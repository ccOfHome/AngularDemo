import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloLifeCircleComponent } from './hello-life-circle.component';

describe('HelloLifeCircleComponent', () => {
  let component: HelloLifeCircleComponent;
  let fixture: ComponentFixture<HelloLifeCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloLifeCircleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloLifeCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
