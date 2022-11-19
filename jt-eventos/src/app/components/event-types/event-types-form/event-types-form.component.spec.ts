import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventTypesFormComponent } from './event-types-form.component';

describe('EventTypesFormComponent', () => {
  let component: EventTypesFormComponent;
  let fixture: ComponentFixture<EventTypesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventTypesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventTypesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
