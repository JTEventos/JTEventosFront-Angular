import { Component, OnInit } from '@angular/core';
import { EventType } from 'src/app/classes/event-types/event-type';
import { EventTypeApiService } from 'src/app/services/event-types/event-type-api.service';

@Component({
  selector: 'app-event-types-details',
  templateUrl: './event-types-details.component.html',
  styleUrls: ['./event-types-details.component.css', '../../../../styles.css'],
})
export class EventTypesDetailsComponent implements OnInit {
  id!: number;
  eventType = new EventType();

  constructor(private eventTypeService: EventTypeApiService) { }

  ngOnInit(): void { }
}
