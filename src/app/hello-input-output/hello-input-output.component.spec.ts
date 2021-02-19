import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloInputOutputComponent } from './hello-input-output.component';

describe('HelloInputOutputComponent', () => {
  let component: HelloInputOutputComponent;
  let fixture: ComponentFixture<HelloInputOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloInputOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloInputOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
