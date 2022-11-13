import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteModalComponent } from 'src/app/modals/delete-modal/delete-modal.component';
import { EventsReportComponent } from '../events-report/events-report.component';

@Component({
  selector: 'app-events-details',
  templateUrl: './events-details.component.html',
  styleUrls: ['./events-details.component.css', '../../../styles.css']
})
export class EventsDetailsComponent implements OnInit {
  title = "Detalhes do Evento"

	constructor(private modalService: NgbModal) {}

	openDelete() {
		const modalRef = this.modalService.open(DeleteModalComponent);
		modalRef.componentInstance.description = 'evento';
	}

  printReport() {
    this.modalService.open(EventsReportComponent);
  }

  ngOnInit(): void {
  }

}
