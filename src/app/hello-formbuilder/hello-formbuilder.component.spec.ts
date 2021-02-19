import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloFormbuilderComponent } from './hello-formbuilder.component';

describe('HelloFormbuilderComponent', () => {
  let component: HelloFormbuilderComponent;
  let fixture: ComponentFixture<HelloFormbuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloFormbuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloFormbuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
