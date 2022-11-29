import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/classes/events/event';
import { EventApiService } from 'src/app/services/events/event-api.service';

@Component({
  selector: 'app-events-table',
  templateUrl: './events-table.component.html',
  styleUrls: ['./events-table.component.css', '../../../../styles.css'],
})
export class EventsTableComponent implements OnInit {
  searchField = '';
  list: Event[] = [];

  constructor(private eventService: EventApiService) {
    this.findAll();
  }

  findAll() {
    this.eventService.findAll().subscribe((data) => {
      this.list = data;
    });
  }

  ngOnInit(): void { }
}
