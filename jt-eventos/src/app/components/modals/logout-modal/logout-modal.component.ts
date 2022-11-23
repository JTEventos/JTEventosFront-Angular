import { Component, EventEmitter, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-logout-modal',
  templateUrl: './logout-modal.component.html',
  styleUrls: ['./logout-modal.component.css', '../../../../styles.css']
})
export class LogoutModalComponent {
  @Output() deleteSession = new EventEmitter<boolean>();

  constructor(public activeModal: NgbActiveModal) { }

  logout(data: boolean) {
    this.deleteSession.emit(data);
    this.activeModal.close();
  }
}
