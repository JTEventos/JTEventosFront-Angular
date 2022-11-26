import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { EventType } from 'src/app/classes/event-types/event-type';
import { EventTypeApiService } from 'src/app/services/event-types/event-type-api.service';
import { EventTypesDetailsComponent } from '../event-types-details/event-types-details.component';
import { EventTypesFormComponent } from '../event-types-form/event-types-form.component';

@Component({
  selector: 'app-event-types-table',
  templateUrl: './event-types-table.component.html',
  styleUrls: ['./event-types-table.component.css', '../../../../styles.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class EventTypesTableComponent implements OnInit {
  title = "Tipos de Evento"
  searchField = '';
  list: EventType[] = [];

  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    private eventTypeService: EventTypeApiService
  ) {
    config.backdrop = 'static';
    config.keyboard = false;

    this.findAll();
  }

  findAll() {
    this.eventTypeService.findAll().subscribe((data) => {
      this.list = data;
    });
  }

  createEventType() {
    const modalRef = this.modalService.open(EventTypesFormComponent, { centered: true });
    modalRef.componentInstance.title = 'Cadastro';
  }

  detailEventType(id: number) {
    this.modalService.open(EventTypesDetailsComponent, { centered: true });
  }

  ngOnInit(): void { }
}
