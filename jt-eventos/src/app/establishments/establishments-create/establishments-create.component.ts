import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CancelModalComponent } from 'src/app/modals/cancel-modal/cancel-modal.component';

@Component({
  selector: 'app-establishments-create',
  templateUrl: './establishments-create.component.html',
  styleUrls: ['./establishments-create.component.css', '../../../styles.css']
})
export class EstablishmentsCreateComponent implements OnInit {
  title = "Cadastro de estabelecimento"

	constructor(private modalService: NgbModal) {}

	cancel() {
		this.modalService.open(CancelModalComponent);
	}

  ngOnInit(): void {
  }

}
