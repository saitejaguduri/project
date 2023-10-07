import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerGetDetailsComponent } from './customer-getdetails.component';

describe('CustomerGetdetailsComponent', () => {
  let component: CustomerGetDetailsComponent;
  let fixture: ComponentFixture<CustomerGetDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerGetDetailsComponent]
    });
    fixture = TestBed.createComponent(CustomerGetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
