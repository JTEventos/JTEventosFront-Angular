import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CancelModalComponent } from '../../modals/cancel-modal/cancel-modal.component';

@Component({
  selector: 'app-customers-form',
  templateUrl: './customers-form.component.html',
  styleUrls: ['./customers-form.component.css', '../../../../styles.css']
})
export class CustomersFormComponent implements OnInit {
  @Input() title: any;

  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal) { }

  cancel() {
    const modalRef = this.modalService.open(CancelModalComponent);
    modalRef.componentInstance.cancelData.subscribe(() => {
      this.activeModal.close();
    })
  }

  ngOnInit(): void { }
}
