import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { map, Observable, startWith } from 'rxjs';
import { EventType } from 'src/app/classes/event-types/event-type';
import { EventTypeApiService } from 'src/app/services/event-types/event-type-api.service';
import { EventTypesDetailsComponent } from '../event-types-details/event-types-details.component';
import { EventTypesFormComponent } from '../event-types-form/event-types-form.component';

const EVENT_TYPES: EventType[] = [];

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
  list: EventType[] = [];

  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    private eventTypeService: EventTypeApiService
  ) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;

    this.eventTypes$ = this.filter.valueChanges.pipe(
      startWith(''),
      map((text) => search(text)),
    );

    this.findAll();
  }

  findAll() {
    this.eventTypeService.findAll().subscribe((data) => {
      this.list = data;
    })
  }

  createEventType() {
    const modalRef = this.modalService.open(EventTypesFormComponent, { centered: true });
    modalRef.componentInstance.title = 'Cadastro';
  }

  detailEventType() {
    this.modalService.open(EventTypesDetailsComponent, { centered: true });
  }

  ngOnInit(): void { }
}
