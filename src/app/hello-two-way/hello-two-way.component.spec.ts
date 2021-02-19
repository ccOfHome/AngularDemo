import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloTwoWayComponent } from './hello-two-way.component';

describe('HelloTwoWayComponent', () => {
  let component: HelloTwoWayComponent;
  let fixture: ComponentFixture<HelloTwoWayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloTwoWayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloTwoWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
