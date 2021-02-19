import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloStyleComponent } from './hello-style.component';

describe('HelloStyleComponent', () => {
  let component: HelloStyleComponent;
  let fixture: ComponentFixture<HelloStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
