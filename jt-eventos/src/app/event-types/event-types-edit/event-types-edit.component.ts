import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CancelModalComponent } from 'src/app/modals/cancel-modal/cancel-modal.component';

@Component({
  selector: 'app-event-types-edit',
  templateUrl: './event-types-edit.component.html',
  styleUrls: ['./event-types-edit.component.css', '../../../styles.css']
})
export class EventTypesEditComponent implements OnInit {
  title = "Edição de tipo de evento"

  constructor(private modalService: NgbModal) { }

  cancel() {
    this.modalService.open(CancelModalComponent);
  }

  ngOnInit(): void { }
}
