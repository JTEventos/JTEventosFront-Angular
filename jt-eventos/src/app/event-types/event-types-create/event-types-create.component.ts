import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CancelModalComponent } from 'src/app/modals/cancel-modal/cancel-modal.component';

@Component({
  selector: 'app-event-types-create',
  templateUrl: './event-types-create.component.html',
  styleUrls: ['./event-types-create.component.css', '../../../styles.css']
})
export class EventTypesCreateComponent implements OnInit {
  title = "Cadastro de Tipo de Evento"

  constructor(private modalService: NgbModal) {}

	open() {
		this.modalService.open(CancelModalComponent);
	}

  ngOnInit(): void {
  }

}
