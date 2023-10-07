import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorUpdateComponent } from './vendor-update.component';

describe('VendorUpdateComponent', () => {
  let component: VendorUpdateComponent;
  let fixture: ComponentFixture<VendorUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorUpdateComponent]
    });
    fixture = TestBed.createComponent(VendorUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
