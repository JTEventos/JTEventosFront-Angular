import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteModalComponent } from 'src/app/components/modals/delete-modal/delete-modal.component';
import { ToastsService } from 'src/app/services/toasts/toasts.service';

@Component({
  selector: 'app-events-details',
  templateUrl: './events-details.component.html',
  styleUrls: ['./events-details.component.css', '../../../../styles.css'],
})
export class EventsDetailsComponent implements OnInit {
  title = "Detalhes do evento";
  description = "Casamento Luzia";

  constructor(
    private toastService: ToastsService,
    private modalService: NgbModal
  ) { }

  openDelete() {
    const modalRef = this.modalService.open(DeleteModalComponent);
    modalRef.componentInstance.description = 'evento';
    modalRef.componentInstance.deleteData.subscribe(() => {
      // this.activeModal.close();
      this.toastService.showSuccess('Cadastro excluído com sucesso.');
    })
  }

  ngOnInit(): void { }
}
