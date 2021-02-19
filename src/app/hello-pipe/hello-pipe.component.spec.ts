import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloPipeComponent } from './hello-pipe.component';

describe('HelloPipeComponent', () => {
  let component: HelloPipeComponent;
  let fixture: ComponentFixture<HelloPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloPipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
