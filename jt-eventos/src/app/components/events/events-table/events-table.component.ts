import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { map, Observable, startWith } from 'rxjs';
import { Event } from 'src/app/classes/events/event';
import { EventApiService } from 'src/app/services/events/event-api.service';
import { EventsDetailsComponent } from '../events-details/events-details.component';
import { EventsFormComponent } from '../events-form/events-form.component';

@Component({
  selector: 'app-events-table',
  templateUrl: './events-table.component.html',
  styleUrls: ['./events-table.component.css', '../../../../styles.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class EventsTableComponent implements OnInit {
  title = "Eventos";
  searchField = '';
  list: Event[] = [];

  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    private eventService: EventApiService,
  ) {
    config.backdrop = 'static';
    config.keyboard = false;

    this.findAll();
  }

  findAll() {
    this.eventService.findAll().subscribe((data) => {
      this.list = data;
    });
  }

  createEvent() {
    const modalRef = this.modalService.open(EventsFormComponent, { centered: true });
    modalRef.componentInstance.title = 'Cadastro';
  }

  detailEvent() {
    this.modalService.open(EventsDetailsComponent, { centered: true });
  }

  ngOnInit(): void { }
}
