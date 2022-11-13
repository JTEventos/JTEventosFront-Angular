import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteModalComponent } from 'src/app/modals/delete-modal/delete-modal.component';

@Component({
  selector: 'app-establishments-details',
  templateUrl: './establishments-details.component.html',
  styleUrls: ['./establishments-details.component.css', '../../../styles.css']
})
export class EstablishmentsDetailsComponent implements OnInit {
  title = "Detalhes do Estabelecimento"

	constructor(private modalService: NgbModal) {}

	openDelete() {
		const modalRef = this.modalService.open(DeleteModalComponent);
		modalRef.componentInstance.description = 'estabelecimento';
	}

  ngOnInit(): void {
  }

}
