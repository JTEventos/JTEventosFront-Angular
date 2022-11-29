import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from 'src/app/classes/customers/customer';
import { DeleteModalComponent } from 'src/app/components/modals/delete-modal/delete-modal.component';
import { ToastsService } from 'src/app/services/toasts/toasts.service';

@Component({
  selector: 'app-customers-details',
  templateUrl: './customers-details.component.html',
  styleUrls: ['./customers-details.component.css', '../../../../styles.css'],
})
export class CustomersDetailsComponent implements OnInit {
  customer = new Customer();

  constructor(
    private toastService: ToastsService,
    private modalService: NgbModal,
  ) { }

  openDelete() {
    const modalRef = this.modalService.open(DeleteModalComponent);
    modalRef.componentInstance.description = 'cliente';
    modalRef.componentInstance.deleteData.subscribe(() => {
      this.toastService.showSuccess('Cadastro excluído com sucesso.');
    })
  }

  ngOnInit(): void { }
}
