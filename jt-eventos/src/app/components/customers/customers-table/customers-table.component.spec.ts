import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersTableComponent } from './customers-table.component';

describe('CustomersTableComponent', () => {
  let component: CustomersTableComponent;
  let fixture: ComponentFixture<CustomersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
