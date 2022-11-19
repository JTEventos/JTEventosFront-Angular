import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersFormComponent } from './customers-form.component';

describe('CustomersFormComponent', () => {
  let component: CustomersFormComponent;
  let fixture: ComponentFixture<CustomersFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
