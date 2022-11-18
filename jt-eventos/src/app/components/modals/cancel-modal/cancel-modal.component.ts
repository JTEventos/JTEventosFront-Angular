import { Component, EventEmitter, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cancel-modal',
  templateUrl: './cancel-modal.component.html',
  styleUrls: ['./cancel-modal.component.css', '../../../../styles.css']
})
export class CancelModalComponent {
  @Output() cancelData = new EventEmitter<boolean>();

	constructor(public activeModal: NgbActiveModal) {}

  cancel(data: boolean) {
    this.cancelData.emit(data);
    this.activeModal.close();
  }
}
