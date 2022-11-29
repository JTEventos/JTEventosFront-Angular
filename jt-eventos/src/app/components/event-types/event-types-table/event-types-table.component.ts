import { Component, OnInit } from '@angular/core';
import { EventType } from 'src/app/classes/event-types/event-type';
import { EventTypeApiService } from 'src/app/services/event-types/event-type-api.service';

@Component({
  selector: 'app-event-types-table',
  templateUrl: './event-types-table.component.html',
  styleUrls: ['./event-types-table.component.css', '../../../../styles.css'],
})
export class EventTypesTableComponent implements OnInit {
  searchField = '';
  list: EventType[] = [];

  constructor(private eventTypeService: EventTypeApiService) {
    this.findAll();
  }

  findAll() {
    this.eventTypeService.findAll().subscribe((data) => {
      this.list = data;
    });
  }

  ngOnInit(): void { }
}
