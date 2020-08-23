import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployDetailsPageComponent } from './employ-details-page.component';

describe('EmployDetailsPageComponent', () => {
  let component: EmployDetailsPageComponent;
  let fixture: ComponentFixture<EmployDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
