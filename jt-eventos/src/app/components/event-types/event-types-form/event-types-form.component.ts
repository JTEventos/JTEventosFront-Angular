import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { CancelModalComponent } from '../../modals/cancel-modal/cancel-modal.component';
import { ToastsService } from 'src/app/services/toasts/toasts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EventTypeApiService } from 'src/app/services/event-types/event-type-api.service';
import { EventType } from 'src/app/classes/event-types/event-type';
import { HttpResponse, HttpResponseBase, HttpStatusCode } from '@angular/common/http';

@Component({
  selector: 'app-event-types-form',
  templateUrl: './event-types-form.component.html',
  styleUrls: ['./event-types-form.component.css', '../../../../styles.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class EventTypesFormComponent implements OnInit {
  @Input() title: any;

  id!: number;
  eventType = new EventType();

  constructor(
    private toastService: ToastsService,
    private modalService: NgbModal,
    private activeModal: NgbActiveModal,
    private route: ActivatedRoute,
    private eventTypeService: EventTypeApiService,
    private router: Router
  ) { }

	cancel() {
		const modalRef = this.modalService.open(CancelModalComponent);
    modalRef.componentInstance.cancelData.subscribe(() => {
      this.activeModal.close();
    })
	}

  save() {
    if (!this.id) {
      this.eventTypeService.createEventType(this.eventType).subscribe((eventType) => {
        this.eventType = new EventType();
        this.toastService.showSuccess('Cadastro realizado com sucesso.');
        this.activeModal.close();
      });
    } else {
      this.eventTypeService.updateEventType(this.id, this.eventType);
      this.toastService.showSuccess('Edição realizada com sucesso.');
    }
  }

  ngOnInit(): void {
    // this.id = +this.route.snapshot.params['id'];
    // if (this.id) {
    //   this.eventType = Object.assign({},
    //     this.eventType = this.eventTypeService.findById(this.id)
    //   );
    // }
  }
}
