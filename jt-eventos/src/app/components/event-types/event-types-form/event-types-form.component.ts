import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CancelModalComponent } from '../../modals/cancel-modal/cancel-modal.component';
import { ToastsService } from 'src/app/services/toasts/toasts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EventTypeApiService } from 'src/app/services/event-types/event-type-api.service';
import { EventType } from 'src/app/classes/event-types/event-type';

@Component({
  selector: 'app-event-types-form',
  templateUrl: './event-types-form.component.html',
  styleUrls: ['./event-types-form.component.css', '../../../../styles.css'],
})
export class EventTypesFormComponent implements OnInit {
  title = 'Cadastro';
  id!: number;
  eventType = new EventType();

  constructor(
    private toastService: ToastsService,
    private modalService: NgbModal,
    private eventTypeService: EventTypeApiService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

	cancel() {
		const modalRef = this.modalService.open(CancelModalComponent);
    modalRef.componentInstance.cancelData.subscribe(() => {
      this.router.navigate(['/event-types']);
    })
	}

  save() {
    if (!this.id) {
      this.eventTypeService.createEventType(this.eventType).subscribe((eventType) => {
        this.eventType = new EventType();
        this.router.navigate(['/event-types']);
        this.toastService.showSuccess('Cadastro realizado com sucesso.');
      });
    } else {
      this.eventTypeService.updateEventType(this.id, this.eventType).subscribe((data) => {
        this.eventType = data;
        this.router.navigate(['/event-types']);
        this.toastService.showSuccess('Edição realizada com sucesso.');
      });
    }
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.title = "Edição";
      this.eventTypeService.findById(this.id).subscribe((data) => {
        this.eventType = data;
      });
    }
  }
}
