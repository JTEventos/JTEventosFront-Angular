import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { UsersFormComponent } from '../users-form/users-form.component';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css', '../../../../styles.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class UsersDetailsComponent implements OnInit {
  title = 'Detalhes do usuário';

  constructor(
    private modalService: NgbModal,
    public activeModal: NgbActiveModal
  ) { }

  editUser() {
    const modalRef = this.modalService.open(UsersFormComponent, { centered: true });
    modalRef.componentInstance.title = 'Edição';
  }

  ngOnInit(): void { }
}
