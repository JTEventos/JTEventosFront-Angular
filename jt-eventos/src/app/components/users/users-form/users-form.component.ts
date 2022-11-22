import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { CancelModalComponent } from '../../modals/cancel-modal/cancel-modal.component';
import { ToastService } from '../../toast-global/toast-service';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css', '../../../../styles.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class UsersFormComponent implements OnInit {
  @Input() title: any;

  constructor(public toastService: ToastService, private modalService: NgbModal, public activeModal: NgbActiveModal) { }

	cancel() {
		const modalRef = this.modalService.open(CancelModalComponent);
    modalRef.componentInstance.cancelData.subscribe(() => {
      this.activeModal.close();
    })
	}

  save() {
    this.activeModal.close();
    this.toastService.showSuccess('Cadastro realizado com sucesso.');
  }

  ngOnInit(): void { }
}
