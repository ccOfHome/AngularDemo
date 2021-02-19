import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloStyleSelectorComponent } from './hello-style-selector.component';

describe('HelloStyleSelectorComponent', () => {
  let component: HelloStyleSelectorComponent;
  let fixture: ComponentFixture<HelloStyleSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloStyleSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloStyleSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
