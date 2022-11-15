import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { map, Observable, startWith } from 'rxjs';
import { EventTypesCreateComponent } from '../event-types-create/event-types-create.component';
import { EventTypesDetailsComponent } from '../event-types-details/event-types-details.component';

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
  styleUrls: ['./event-types-table.component.css', '../../../../styles.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class EventTypesTableComponent implements OnInit {
  title = "Tipos de Evento"
  eventTypes$: Observable<EventType[]>;
  filter = new FormControl('', { nonNullable: true });

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;

    this.eventTypes$ = this.filter.valueChanges.pipe(
      startWith(''),
      map((text) => search(text)),
    );
  }

  createEventType() {
    this.modalService.open(EventTypesCreateComponent, { centered: true });
  }

  detailEventType() {
    this.modalService.open(EventTypesDetailsComponent, { centered: true });
  }

  ngOnInit(): void { }
}
