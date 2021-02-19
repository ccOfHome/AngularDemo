import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloSelfEventComponent } from './hello-self-event.component';

describe('HelloSelfEventComponent', () => {
  let component: HelloSelfEventComponent;
  let fixture: ComponentFixture<HelloSelfEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloSelfEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloSelfEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
