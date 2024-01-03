import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindusComponent } from './findus.component';

describe('FindusComponent', () => {
  let component: FindusComponent;
  let fixture: ComponentFixture<FindusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindusComponent]
    });
    fixture = TestBed.createComponent(FindusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
