import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { DeleteModalComponent } from 'src/app/components/modals/delete-modal/delete-modal.component';
import { ToastService } from '../../toast-global/toast-service';
import { EventsFormComponent } from '../events-form/events-form.component';

@Component({
  selector: 'app-events-details',
  templateUrl: './events-details.component.html',
  styleUrls: ['./events-details.component.css', '../../../../styles.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class EventsDetailsComponent implements OnInit {
  title = "Detalhes do evento";
  description = "Casamento Luzia";

  constructor(public toastService: ToastService, private modalService: NgbModal, public activeModal: NgbActiveModal) { }

  openDelete() {
    const modalRef = this.modalService.open(DeleteModalComponent);
    modalRef.componentInstance.description = 'evento';
    modalRef.componentInstance.deleteData.subscribe(() => {
      this.activeModal.close();
      this.toastService.showSuccess('Cadastro excluído com sucesso.');
    })
  }

  editEvent() {
    const modalRef = this.modalService.open(EventsFormComponent, { centered: true });
    modalRef.componentInstance.title = 'Edição';
  }

  ngOnInit(): void { }
}
