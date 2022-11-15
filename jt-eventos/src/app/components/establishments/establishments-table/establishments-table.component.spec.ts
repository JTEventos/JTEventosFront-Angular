import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablishmentsTableComponent } from './establishments-table.component';

describe('EstablishmentsTableComponent', () => {
  let component: EstablishmentsTableComponent;
  let fixture: ComponentFixture<EstablishmentsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstablishmentsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstablishmentsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
