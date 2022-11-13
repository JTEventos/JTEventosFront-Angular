import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CancelModalComponent } from 'src/app/modals/cancel-modal/cancel-modal.component';

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.css', '../../../styles.css']
})
export class UsersCreateComponent implements OnInit {
  title = 'Cadastro de Usuário';

	constructor(private modalService: NgbModal) {}

	open() {
		this.modalService.open(CancelModalComponent);
	}

  ngOnInit(): void {
  }

}
