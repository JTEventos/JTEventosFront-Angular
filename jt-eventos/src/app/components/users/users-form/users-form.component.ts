import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CancelModalComponent } from '../../modals/cancel-modal/cancel-modal.component';
import { ToastService } from '../../toast-global/toast-service';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css', '../../../../styles.css']
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
    this.toastService.show('Cadastro realizado com sucesso.', { classname: 'bg-success text-light' });
  }

  ngOnInit(): void { }
}
