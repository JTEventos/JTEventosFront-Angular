import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablishmentsEditComponent } from './establishments-edit.component';

describe('EstablishmentsEditComponent', () => {
  let component: EstablishmentsEditComponent;
  let fixture: ComponentFixture<EstablishmentsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstablishmentsEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstablishmentsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
