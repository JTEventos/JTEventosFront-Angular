import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CancelModalComponent } from 'src/app/components/modals/cancel-modal/cancel-modal.component';

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.css', '../../../../styles.css']
})
export class UsersCreateComponent implements OnInit {
  title = 'Cadastro de usuário';

  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal) { }

	cancel() {
		this.modalService.open(CancelModalComponent);
	}

  ngOnInit(): void { }
}
