import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CancelModalComponent } from 'src/app/modals/cancel-modal/cancel-modal.component';

@Component({
  selector: 'app-customers-create',
  templateUrl: './customers-create.component.html',
  styleUrls: ['./customers-create.component.css', '../../../styles.css']
})
export class CustomersCreateComponent implements OnInit {
  title = "Cadastro de Cliente"

	constructor(private modalService: NgbModal) {}

	open() {
		this.modalService.open(CancelModalComponent);
	}

  ngOnInit(): void {
  }

}
