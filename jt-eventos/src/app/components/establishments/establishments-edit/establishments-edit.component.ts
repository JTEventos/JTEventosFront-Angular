import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CancelModalComponent } from 'src/app/components/modals/cancel-modal/cancel-modal.component';

@Component({
  selector: 'app-establishments-edit',
  templateUrl: './establishments-edit.component.html',
  styleUrls: ['./establishments-edit.component.css', '../../../../styles.css']
})
export class EstablishmentsEditComponent implements OnInit {
  title = "Edição de estabelecimento"

	constructor(private modalService: NgbModal, public activeModal: NgbActiveModal) {}

	cancel() {
		const modalRef = this.modalService.open(CancelModalComponent);
    modalRef.componentInstance.cancelData.subscribe(() => {
      this.activeModal.close();
    })
	}

  ngOnInit(): void {
  }

}
