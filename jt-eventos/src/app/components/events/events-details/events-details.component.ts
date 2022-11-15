import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { DeleteModalComponent } from 'src/app/components/modals/delete-modal/delete-modal.component';
import { EventsEditComponent } from '../events-edit/events-edit.component';

@Component({
  selector: 'app-events-details',
  templateUrl: './events-details.component.html',
  styleUrls: ['./events-details.component.css', '../../../../styles.css'],
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

  windowFeatures = [
    "width=660",
    "height=510",
    "top=100",
    "left=699",
    "scrollbars=yes",
    "status=no",
    "toolbar=no",
    "location=no",
    "menubar=no",
    "resizable=no",
    "fullscreen=no"
  ];

  openWindow() {
    window.open(
      "../events-report/events-report.component.html",
      "Relatório do evento",
      this.windowFeatures.join()
    );
  }

  ngOnInit(): void { }
}
