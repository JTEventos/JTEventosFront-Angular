import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { DeleteModalComponent } from 'src/app/modals/delete-modal/delete-modal.component';
import { EventsEditComponent } from '../events-edit/events-edit.component';

@Component({
  selector: 'app-events-details',
  templateUrl: './events-details.component.html',
  styleUrls: ['./events-details.component.css', '../../../styles.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class EventsDetailsComponent implements OnInit {
  title = "Detalhes do evento"

  constructor(config: NgbModalConfig, private modalService: NgbModal, public activeModal: NgbActiveModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  openDelete() {
    const modalRef = this.modalService.open(DeleteModalComponent);
    modalRef.componentInstance.description = 'evento';
  }

  editEvent() {
    this.modalService.open(EventsEditComponent, { centered: true });
  }

  ngOnInit(): void { }
}
