import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { DeleteModalComponent } from 'src/app/components/modals/delete-modal/delete-modal.component';
import { EventsFormComponent } from '../events-form/events-form.component';

@Component({
  selector: 'app-events-details',
  templateUrl: './events-details.component.html',
  styleUrls: ['./events-details.component.css', '../../../../styles.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class EventsDetailsComponent implements OnInit {
  title = "Detalhes do evento";
  description = "Casamento Luzia";

  constructor(config: NgbModalConfig, private modalService: NgbModal, public activeModal: NgbActiveModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  openDelete() {
    const modalRef = this.modalService.open(DeleteModalComponent);
    modalRef.componentInstance.description = 'evento';
    modalRef.componentInstance.deleteData.subscribe(() => {
      this.activeModal.close();
    })
  }

  editEvent() {
    const modalRef = this.modalService.open(EventsFormComponent, { centered: true });
    modalRef.componentInstance.title = 'Edição';
  }

  ngOnInit(): void { }
}
