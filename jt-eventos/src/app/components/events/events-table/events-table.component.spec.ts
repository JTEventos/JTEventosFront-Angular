import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsTableComponent } from './events-table.component';

describe('EventsTableComponent', () => {
  let component: EventsTableComponent;
  let fixture: ComponentFixture<EventsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
