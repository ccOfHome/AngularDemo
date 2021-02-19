import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloStyleTypeComponent } from './hello-style-type.component';

describe('HelloStyleTypeComponent', () => {
  let component: HelloStyleTypeComponent;
  let fixture: ComponentFixture<HelloStyleTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloStyleTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloStyleTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
