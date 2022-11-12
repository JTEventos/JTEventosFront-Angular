import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

interface EventType {
	description: string;
}

const EVENT_TYPES: EventType[] = [
	{
		description: 'Casamento',
	},
	{
		description: 'Aniversário',
	},
];

function search(text: string): EventType[] {
	return EVENT_TYPES.filter((eventType) => {
		const term = text.toLowerCase();
		return (
			eventType.description.toLowerCase().includes(term)
		);
	});
}

@Component({
  selector: 'app-event-types-table',
  templateUrl: './event-types-table.component.html',
  styleUrls: ['./event-types-table.component.css', '../../../styles.css']
})
export class EventTypesTableComponent implements OnInit {
  title = "Tipos de Evento"
  eventTypes$: Observable<EventType[]>;
  filter = new FormControl('', { nonNullable: true });

  constructor() {
    this.eventTypes$ = this.filter.valueChanges.pipe(
      startWith(''),
      map((text) => search(text)),
    );
  }

  ngOnInit(): void {
  }

}
