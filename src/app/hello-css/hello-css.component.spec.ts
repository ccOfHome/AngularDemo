import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloCssComponent } from './hello-css.component';

describe('HelloCssComponent', () => {
  let component: HelloCssComponent;
  let fixture: ComponentFixture<HelloCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloCssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
