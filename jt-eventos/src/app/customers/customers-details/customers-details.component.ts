import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteModalComponent } from 'src/app/modals/delete-modal/delete-modal.component';

@Component({
  selector: 'app-customers-details',
  templateUrl: './customers-details.component.html',
  styleUrls: ['./customers-details.component.css', '../../../styles.css']
})
export class CustomersDetailsComponent implements OnInit {
  title = "Detalhes do Cliente"

	constructor(private modalService: NgbModal) {}

	openDelete() {
		const modalRef = this.modalService.open(DeleteModalComponent);
		modalRef.componentInstance.description = 'cliente';
	}

  ngOnInit(): void {
  }

}
