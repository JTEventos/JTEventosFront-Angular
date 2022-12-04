import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Event } from 'src/app/classes/events/event';
import { DeleteModalComponent } from 'src/app/components/modals/delete-modal/delete-modal.component';
import { EventApiService } from 'src/app/services/events/event-api.service';
import { ToastsService } from 'src/app/services/toasts/toasts.service';
import { ValidateError } from 'src/app/utils/validate-error';

@Component({
  selector: 'app-events-details',
  templateUrl: './events-details.component.html',
  styleUrls: ['./events-details.component.css', '../../../../styles.css'],
})
export class EventsDetailsComponent implements OnInit {
  id!: number;
  event = new Event();
  list: Event[] = []

  constructor(
    private toastService: ToastsService,
    private modalService: NgbModal,
    private eventService: EventApiService,
    private router: Router,
    private route: ActivatedRoute,
    private utils: ValidateError
  ) { }
  navigateToTable() {
    return this.router.navigate(['/events']);
  }

  openDelete(id: number) {
    const modalRef = this.modalService.open(DeleteModalComponent);
    modalRef.componentInstance.description = 'evento';
    modalRef.componentInstance.deleteData.subscribe(() => {
      this.eventService.deleteEvent(id).subscribe((res) => {
        this.toastService.showSuccess(res.body.msg);
        this.navigateToTable();
      }, (err: HttpErrorResponse) => {
        this.utils.validateError(err);
      })
    })
  }

  splitInviteList() {
    return this.event.inviteList.split(', ').toString();
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.eventService.findById(this.id).subscribe((data) => {
        this.event = data;
      });
    }
  }
}
