import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorWorkListComponent } from './vendor-work-list.component';

describe('VendorWorkListComponent', () => {
  let component: VendorWorkListComponent;
  let fixture: ComponentFixture<VendorWorkListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorWorkListComponent]
    });
    fixture = TestBed.createComponent(VendorWorkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
