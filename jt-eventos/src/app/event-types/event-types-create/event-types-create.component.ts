import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CancelModalComponent } from 'src/app/modals/cancel-modal/cancel-modal.component';

@Component({
  selector: 'app-event-types-create',
  templateUrl: './event-types-create.component.html',
  styleUrls: ['./event-types-create.component.css', '../../../styles.css']
})
export class EventTypesCreateComponent implements OnInit {
  title = "Cadastro de tipo de evento"

  constructor(private modalService: NgbModal) {}

	cancel() {
		this.modalService.open(CancelModalComponent);
	}

  ngOnInit(): void { }
}
