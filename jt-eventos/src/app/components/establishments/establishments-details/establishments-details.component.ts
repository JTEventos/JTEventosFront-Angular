import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { DeleteModalComponent } from 'src/app/components/modals/delete-modal/delete-modal.component';
import { ToastService } from '../../toast-global/toast-service';
import { EstablishmentsFormComponent } from '../establishments-form/establishments-form.component';

@Component({
  selector: 'app-establishments-details',
  templateUrl: './establishments-details.component.html',
  styleUrls: ['./establishments-details.component.css', '../../../../styles.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class EstablishmentsDetailsComponent implements OnInit {
  title = "Detalhes do estabelecimento"

  constructor(public toastService: ToastService, config: NgbModalConfig, private modalService: NgbModal, public activeModal: NgbActiveModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  openDelete() {
    const modalRef = this.modalService.open(DeleteModalComponent);
    modalRef.componentInstance.description = 'estabelecimento';
    modalRef.componentInstance.deleteData.subscribe(() => {
      this.activeModal.close();
      this.toastService.show('Cadastro excluído com sucesso.', { classname: 'bg-success text-light' });
    })
  }

  editEstablishment() {
    const modalRef = this.modalService.open(EstablishmentsFormComponent, { centered: true });
    modalRef.componentInstance.title = 'Edição';
  }

  ngOnInit(): void { }
}
