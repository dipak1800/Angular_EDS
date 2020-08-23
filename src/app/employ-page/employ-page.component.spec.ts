import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployPageComponent } from './employ-page.component';

describe('EmployPageComponent', () => {
  let component: EmployPageComponent;
  let fixture: ComponentFixture<EmployPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
