import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloFatherChildComponent } from './hello-father-child.component';

describe('HelloFatherChildComponent', () => {
  let component: HelloFatherChildComponent;
  let fixture: ComponentFixture<HelloFatherChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloFatherChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloFatherChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
