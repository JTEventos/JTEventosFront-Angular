import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { map, Observable, startWith } from 'rxjs';
import { EventsCreateComponent } from '../events-create/events-create.component';
import { EventsDetailsComponent } from '../events-details/events-details.component';

interface Events {
  description: string;
  customerName: string;
  establishmentDescription: string;
  startDate: string;
  finishDate: string;
  inviteList: string;
}

const EVENTS: Events[] = [
  {
    description: "Casamento Luzia",
    customerName: "Jonas Pohlmann",
    establishmentDescription: "Salão Gostas de Prata",
    startDate: "03/02/2023",
    finishDate: "04/02/2023",
    inviteList: "Thiago, Roberto, Bruna, Salem, Lorena",
  },
  {
    description: "Aniversário Thiago e Bruna",
    customerName: "Thiago Proença",
    establishmentDescription: "Casa de Festas Palhaço Pimpão",
    startDate: "29/10/2023",
    finishDate: "31/10/2023",
    inviteList: "Jonas, Roberto, Luzia, Salem, Lorena",
  },
];

function search(text: string): Events[] {
  return EVENTS.filter((event) => {
    const term = text.toLowerCase();
    return (
      event.description.toLowerCase().includes(term) ||
      event.customerName.toLowerCase().includes(term) ||
      event.establishmentDescription.toLowerCase().includes(term) ||
      event.startDate.includes(term) ||
      event.finishDate.includes(term)
    );
  });
}

@Component({
  selector: 'app-events-table',
  templateUrl: './events-table.component.html',
  styleUrls: ['./events-table.component.css', '../../../../styles.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class EventsTableComponent implements OnInit {
  title = "Eventos"
  events$: Observable<Events[]>;
  filter = new FormControl('', { nonNullable: true });

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;

    this.events$ = this.filter.valueChanges.pipe(
      startWith(''),
      map((text) => search(text)),
    );
  }

  createEvent() {
    this.modalService.open(EventsCreateComponent, { centered: true });
  }

  detailEvent() {
    this.modalService.open(EventsDetailsComponent, { centered: true });
  }

  ngOnInit(): void { }
}
