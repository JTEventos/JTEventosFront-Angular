import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablishmentsCreateComponent } from './establishments-create.component';

describe('EstablishmentsCreateComponent', () => {
  let component: EstablishmentsCreateComponent;
  let fixture: ComponentFixture<EstablishmentsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstablishmentsCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstablishmentsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
