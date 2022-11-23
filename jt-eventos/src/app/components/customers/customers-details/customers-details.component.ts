import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { DeleteModalComponent } from 'src/app/components/modals/delete-modal/delete-modal.component';
import { ToastsService } from 'src/app/services/toasts/toasts.service';
import { CustomersFormComponent } from '../customers-form/customers-form.component';

@Component({
  selector: 'app-customers-details',
  templateUrl: './customers-details.component.html',
  styleUrls: ['./customers-details.component.css', '../../../../styles.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class CustomersDetailsComponent implements OnInit {
  title = "Detalhes do cliente"

  constructor(
    private toastService: ToastsService,
    private modalService: NgbModal,
    public activeModal: NgbActiveModal
  ) { }

  openDelete() {
    const modalRef = this.modalService.open(DeleteModalComponent);
    modalRef.componentInstance.description = 'cliente';
    modalRef.componentInstance.deleteData.subscribe(() => {
      this.activeModal.close();
      this.toastService.showSuccess('Cadastro excluído com sucesso.');
    })
  }

  editCustomer() {
    const modalRef = this.modalService.open(CustomersFormComponent, { centered: true });
    modalRef.componentInstance.title = 'Edição';
  }

  ngOnInit(): void { }
}
