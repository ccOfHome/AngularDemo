import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloEveryoneComponent } from './hello-everyone.component';

describe('HelloEveryoneComponent', () => {
  let component: HelloEveryoneComponent;
  let fixture: ComponentFixture<HelloEveryoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloEveryoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloEveryoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
