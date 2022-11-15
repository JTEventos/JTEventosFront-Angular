import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CancelModalComponent } from 'src/app/components/modals/cancel-modal/cancel-modal.component';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css', '../../../../styles.css']
})
export class UsersEditComponent implements OnInit {
  title = "Edição de usuário";

  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal) { }

  cancel() {
    this.modalService.open(CancelModalComponent);
  }

  ngOnInit(): void { }
}
