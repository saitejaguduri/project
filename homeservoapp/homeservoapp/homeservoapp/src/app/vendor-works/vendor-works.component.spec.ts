import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorWorksComponent } from './vendor-works.component';

describe('VendorWorksComponent', () => {
  let component: VendorWorksComponent;
  let fixture: ComponentFixture<VendorWorksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorWorksComponent]
    });
    fixture = TestBed.createComponent(VendorWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
