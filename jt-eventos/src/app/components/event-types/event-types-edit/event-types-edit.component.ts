import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CancelModalComponent } from 'src/app/components/modals/cancel-modal/cancel-modal.component';

@Component({
  selector: 'app-event-types-edit',
  templateUrl: './event-types-edit.component.html',
  styleUrls: ['./event-types-edit.component.css', '../../../../styles.css']
})
export class EventTypesEditComponent implements OnInit {
  title = "Edição de tipo de evento"

  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal) { }

  cancel() {
    const modalRef = this.modalService.open(CancelModalComponent);
    modalRef.componentInstance.cancelData.subscribe(() => {
      this.activeModal.close();
    })
  }

  ngOnInit(): void { }
}
