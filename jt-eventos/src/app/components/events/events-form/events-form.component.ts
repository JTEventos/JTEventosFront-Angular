import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CancelModalComponent } from '../../modals/cancel-modal/cancel-modal.component';
import { ToastsService } from 'src/app/services/toasts/toasts.service';
import { Event } from 'src/app/classes/events/event';
import { EventApiService } from 'src/app/services/events/event-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

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

  navigateToTable() {
    return this.router.navigate(['/events']);
  }

	cancel() {
		const modalRef = this.modalService.open(CancelModalComponent);
    modalRef.componentInstance.cancelData.subscribe(() => {
      this.navigateToTable();
    })
	}

  save() {
    if (!this.id) {
      this.eventService.createEvent(this.event).subscribe((res) => {
        this.toastService.showSuccess(res.body.msg);
        this.navigateToTable();
      }, (err: HttpErrorResponse) => {
        if (err.status === 400) {
          this.toastService.showDanger(err.error.msg);
        } else if (err.status === 404) {
          this.toastService.showDanger(err.error[0].msg);
        }
      });
    } else {
      this.eventService.updateEvent(this.id, this.event).subscribe((res) => {
        this.toastService.showSuccess(res.body.msg);
        this.navigateToTable();
      }, (err: HttpErrorResponse) => {
        if (err.status === 400) {
          this.toastService.showDanger(err.error.msg);
        } else if (err.status === 404) {
          this.toastService.showDanger(err.error[0].msg);
        }
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
