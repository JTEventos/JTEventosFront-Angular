import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CancelModalComponent } from '../../modals/cancel-modal/cancel-modal.component';
import { ToastsService } from 'src/app/services/toasts/toasts.service';
import { Event } from 'src/app/classes/events/event';
import { EventApiService } from 'src/app/services/events/event-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ValidateError } from 'src/app/utils/validate-error';
import { EventType } from 'src/app/classes/event-types/event-type';
import { Customer } from 'src/app/classes/customers/customer';
import { Establishment } from 'src/app/classes/establishments/establishment';
import { EventTypeApiService } from 'src/app/services/event-types/event-type-api.service';
import { CustomerApiService } from 'src/app/services/customers/customer-api.service';
import { EstablishmentApiService } from 'src/app/services/establishments/establishment-api.service';

@Component({
  selector: 'app-events-form',
  templateUrl: './events-form.component.html',
  styleUrls: ['./events-form.component.css', '../../../../styles.css'],
})
export class EventsFormComponent implements OnInit {
	title = 'Cadastro';
  id!: number;
  event = new Event();
  list: Array<Event> = [];
  listEventType: EventType[] = [];
  listCustomer: Customer[] = [];
  listEstablishment: Establishment[] = [];

	constructor(
    private toastService: ToastsService,
    private modalService: NgbModal,
    private eventService: EventApiService,
    private eventTypeService: EventTypeApiService,
    private customerService: CustomerApiService,
    private establishmentService: EstablishmentApiService,
    private router: Router,
    private route: ActivatedRoute,
    private utils: ValidateError
  ) {
    this.eventTypeFindAll();
    this.customerFindAll();
    this.establishmentFindAll();
  }

  eventTypeFindAll() {
    this.eventTypeService.findAll().subscribe((data) => {
      this.listEventType = data;
    });
  }

  customerFindAll() {
    this.customerService.findAll().subscribe((data) => {
      this.listCustomer = data;
    });
  }

  establishmentFindAll() {
    this.establishmentService.findAll().subscribe((data) => {
      this.listEstablishment = data;
    });
  }

  compareFn(item1: any, item2: any): boolean {
    return item1 && item2 ? item1.eventTypeId === item2._id : item1 === item2;
  }

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
        this.utils.validateError(err);
      });
    } else {
      this.eventService.updateEvent(this.id, this.event).subscribe((res) => {
        this.toastService.showSuccess(res.body.msg);
        this.navigateToTable();
      }, (err: HttpErrorResponse) => {
        this.utils.validateError(err);
      });
    }
  }

	ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.title = "Edição";
      this.eventService.findById(this.id).subscribe((data: any) => {
        this.event = data[0];
        this.list.push(this.event);
      });
    }
  }
}
