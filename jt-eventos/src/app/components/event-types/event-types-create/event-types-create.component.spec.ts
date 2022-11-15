import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventTypesCreateComponent } from './event-types-create.component';

describe('EventTypesCreateComponent', () => {
  let component: EventTypesCreateComponent;
  let fixture: ComponentFixture<EventTypesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventTypesCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventTypesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
