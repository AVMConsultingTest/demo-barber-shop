import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopwithusComponent } from './shopwithus.component';

describe('ShopwithusComponent', () => {
  let component: ShopwithusComponent;
  let fixture: ComponentFixture<ShopwithusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopwithusComponent]
    });
    fixture = TestBed.createComponent(ShopwithusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
