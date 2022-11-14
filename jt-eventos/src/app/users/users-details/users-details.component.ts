import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { UsersEditComponent } from '../users-edit/users-edit.component';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css', '../../../styles.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class UsersDetailsComponent implements OnInit {
  title = 'Detalhes do usuário';

  constructor(config: NgbModalConfig, private modalService: NgbModal, public activeModal: NgbActiveModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  editUser() {
    this.modalService.open(UsersEditComponent, { centered: true });
  }

  ngOnInit(): void { }
}
