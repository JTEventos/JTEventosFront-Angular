import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CancelModalComponent } from '../../modals/cancel-modal/cancel-modal.component';
import { ToastsService } from 'src/app/services/toasts/toasts.service';
import { Event } from 'src/app/classes/events/event';
import { EventApiService } from 'src/app/services/events/event-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-events-form',
  templateUrl: './events-form.component.html',
  styleUrls: ['./events-form.component.css', '../../../../styles.css'],
})
export class EventsFormComponent implements OnInit {
	title = 'Cadastro';
  id!: number;
  event = new Event();

	constructor(
    private toastService: ToastsService,
    private modalService: NgbModal,
    private eventService: EventApiService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

	cancel() {
		const modalRef = this.modalService.open(CancelModalComponent);
    modalRef.componentInstance.cancelData.subscribe(() => {
      this.router.navigate(['/events'])
    })
	}

  save() {
    if (!this.id) {
      this.eventService.createEvent(this.event).subscribe((event) => {
        this.event = new Event();
        this.router.navigate(['/events']);
        this.toastService.showSuccess('Cadastro realizado com sucesso.');
      });
    } else {
      this.eventService.updateEvent(this.id, this.event).subscribe((data) => {
        this.event = data;
        this.router.navigate(['/events']);
        this.toastService.showSuccess('Edição realizada com sucesso.');
      });
    }
  }

	ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.title = "Edição";
      this.eventService.findById(this.id).subscribe((data) => {
        this.event = data;
      });
    }
  }
}
