import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventTypesDetailsComponent } from './event-types-details.component';

describe('EventTypesDetailsComponent', () => {
  let component: EventTypesDetailsComponent;
  let fixture: ComponentFixture<EventTypesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventTypesDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventTypesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
