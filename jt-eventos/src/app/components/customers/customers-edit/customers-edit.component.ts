import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CancelModalComponent } from 'src/app/components/modals/cancel-modal/cancel-modal.component';

@Component({
  selector: 'app-customers-edit',
  templateUrl: './customers-edit.component.html',
  styleUrls: ['./customers-edit.component.css', '../../../../styles.css']
})
export class CustomersEditComponent implements OnInit {
  title = "Edição de cliente"

  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal) { }

  cancel() {
    this.modalService.open(CancelModalComponent);
  }

  ngOnInit(): void { }
}
