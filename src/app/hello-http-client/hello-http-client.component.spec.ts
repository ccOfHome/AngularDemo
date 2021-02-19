import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloHttpClientComponent } from './hello-http-client.component';

describe('HelloHttpClientComponent', () => {
  let component: HelloHttpClientComponent;
  let fixture: ComponentFixture<HelloHttpClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloHttpClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloHttpClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
