import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CancelModalComponent } from 'src/app/components/modals/cancel-modal/cancel-modal.component';

@Component({
  selector: 'app-customers-create',
  templateUrl: './customers-create.component.html',
  styleUrls: ['./customers-create.component.css', '../../../../styles.css']
})
export class CustomersCreateComponent implements OnInit {
  title = "Cadastro de cliente"

  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal) { }

  cancel() {
    const modalRef = this.modalService.open(CancelModalComponent);
    modalRef.componentInstance.cancelData.subscribe(() => {
      this.activeModal.close();
    })
  }

  ngOnInit(): void { }
}
