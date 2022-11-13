import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CancelModalComponent } from 'src/app/modals/cancel-modal/cancel-modal.component';

@Component({
  selector: 'app-establishments-edit',
  templateUrl: './establishments-edit.component.html',
  styleUrls: ['./establishments-edit.component.css', '../../../styles.css']
})
export class EstablishmentsEditComponent implements OnInit {
  title = "Edição de Estabelecimento"

	constructor(private modalService: NgbModal) {}

	open() {
		this.modalService.open(CancelModalComponent);
	}

  ngOnInit(): void {
  }

}
