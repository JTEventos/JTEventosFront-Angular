import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablishmentsDetailsComponent } from './establishments-details.component';

describe('EstablishmentsDetailsComponent', () => {
  let component: EstablishmentsDetailsComponent;
  let fixture: ComponentFixture<EstablishmentsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstablishmentsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstablishmentsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
