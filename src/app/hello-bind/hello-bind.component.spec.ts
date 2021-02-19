import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloBindComponent } from './hello-bind.component';

describe('HelloBindComponent', () => {
  let component: HelloBindComponent;
  let fixture: ComponentFixture<HelloBindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloBindComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
