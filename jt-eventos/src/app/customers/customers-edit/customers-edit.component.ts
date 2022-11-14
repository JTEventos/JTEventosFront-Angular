import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CancelModalComponent } from 'src/app/modals/cancel-modal/cancel-modal.component';

@Component({
  selector: 'app-customers-edit',
  templateUrl: './customers-edit.component.html',
  styleUrls: ['./customers-edit.component.css', '../../../styles.css']
})
export class CustomersEditComponent implements OnInit {
  title = "Edição de cliente"

	constructor(private modalService: NgbModal) {}

	cancel() {
		this.modalService.open(CancelModalComponent);
	}

  ngOnInit(): void {
  }

}
