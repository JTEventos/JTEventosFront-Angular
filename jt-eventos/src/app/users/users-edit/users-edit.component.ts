import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CancelModalComponent } from 'src/app/modals/cancel-modal/cancel-modal.component';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css', '../../../styles.css']
})
export class UsersEditComponent implements OnInit {
  title = "Edição de usuário";

  constructor(private modalService: NgbModal) { }

  cancel() {
    this.modalService.open(CancelModalComponent);
  }

  ngOnInit(): void { }
}
