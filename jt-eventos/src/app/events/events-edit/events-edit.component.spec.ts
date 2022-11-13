import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsEditComponent } from './events-edit.component';

describe('EventsEditComponent', () => {
  let component: EventsEditComponent;
  let fixture: ComponentFixture<EventsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
