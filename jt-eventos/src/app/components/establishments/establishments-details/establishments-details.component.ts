import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { DeleteModalComponent } from 'src/app/components/modals/delete-modal/delete-modal.component';
import { ToastsService } from 'src/app/services/toasts/toasts.service';
import { EstablishmentsFormComponent } from '../establishments-form/establishments-form.component';

@Component({
  selector: 'app-establishments-details',
  templateUrl: './establishments-details.component.html',
  styleUrls: ['./establishments-details.component.css', '../../../../styles.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class EstablishmentsDetailsComponent implements OnInit {
  title = "Detalhes do estabelecimento"

  constructor(
    private toastService: ToastsService,
    private modalService: NgbModal,
    public activeModal: NgbActiveModal
  ) { }

  openDelete() {
    const modalRef = this.modalService.open(DeleteModalComponent);
    modalRef.componentInstance.description = 'estabelecimento';
    modalRef.componentInstance.deleteData.subscribe(() => {
      this.activeModal.close();
      this.toastService.showSuccess('Cadastro excluído com sucesso.');
    })
  }

  editEstablishment() {
    const modalRef = this.modalService.open(EstablishmentsFormComponent, { centered: true });
    modalRef.componentInstance.title = 'Edição';
  }

  ngOnInit(): void { }
}
