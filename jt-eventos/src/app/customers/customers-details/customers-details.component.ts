import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { DeleteModalComponent } from 'src/app/modals/delete-modal/delete-modal.component';
import { CustomersEditComponent } from '../customers-edit/customers-edit.component';

@Component({
  selector: 'app-customers-details',
  templateUrl: './customers-details.component.html',
  styleUrls: ['./customers-details.component.css', '../../../styles.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class CustomersDetailsComponent implements OnInit {
  title = "Detalhes do cliente"

  constructor(config: NgbModalConfig, private modalService: NgbModal, public activeModal: NgbActiveModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  openDelete() {
    const modalRef = this.modalService.open(DeleteModalComponent);
    modalRef.componentInstance.description = 'cliente';
  }

  editCustomer() {
    this.modalService.open(CustomersEditComponent, { centered: true });
  }

  ngOnInit(): void { }
}
