import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { EventTypesEditComponent } from '../event-types-edit/event-types-edit.component';

@Component({
  selector: 'app-event-types-details',
  templateUrl: './event-types-details.component.html',
  styleUrls: ['./event-types-details.component.css', '../../../../styles.css']
})
export class EventTypesDetailsComponent implements OnInit {
  title = "Detalhes do tipo de evento"

  constructor(config: NgbModalConfig, private modalService: NgbModal, public activeModal: NgbActiveModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  editEventType() {
    this.modalService.open(EventTypesEditComponent, { centered: true });
  }

  ngOnInit(): void { }
}
