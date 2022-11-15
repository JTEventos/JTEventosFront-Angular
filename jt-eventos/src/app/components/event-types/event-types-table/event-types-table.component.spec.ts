import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventTypesTableComponent } from './event-types-table.component';

describe('EventTypesTableComponent', () => {
  let component: EventTypesTableComponent;
  let fixture: ComponentFixture<EventTypesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventTypesTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventTypesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
