import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cancel-modal',
  templateUrl: './cancel-modal.component.html',
  styleUrls: ['./cancel-modal.component.css', '../../../../styles.css']
})
export class CancelModalComponent {
	constructor(public activeModal: NgbActiveModal) {}
}
