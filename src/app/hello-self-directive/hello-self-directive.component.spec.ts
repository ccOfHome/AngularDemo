import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloSelfDirectiveComponent } from './hello-self-directive.component';

describe('HelloSelfDirectiveComponent', () => {
  let component: HelloSelfDirectiveComponent;
  let fixture: ComponentFixture<HelloSelfDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloSelfDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloSelfDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
