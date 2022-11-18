import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css', '../../../../styles.css']
})
export class DeleteModalComponent {
	@Input() description: any;
  @Output() deleteData = new EventEmitter<boolean>();

	constructor(public activeModal: NgbActiveModal) {}

  delete(data: boolean) {
    this.deleteData.emit(data);
    this.activeModal.close();
  }
}
