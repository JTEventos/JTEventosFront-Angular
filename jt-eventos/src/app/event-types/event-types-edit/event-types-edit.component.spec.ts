import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventTypesEditComponent } from './event-types-edit.component';

describe('EventTypesEditComponent', () => {
  let component: EventTypesEditComponent;
  let fixture: ComponentFixture<EventTypesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventTypesEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventTypesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
