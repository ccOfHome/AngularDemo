import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloUserListComponent } from './hello-user-list.component';

describe('HelloUserListComponent', () => {
  let component: HelloUserListComponent;
  let fixture: ComponentFixture<HelloUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloUserListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
