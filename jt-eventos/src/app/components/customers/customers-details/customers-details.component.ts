import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from 'src/app/classes/customers/customer';
import { DeleteModalComponent } from 'src/app/components/modals/delete-modal/delete-modal.component';
import { CustomerApiService } from 'src/app/services/customers/customer-api.service';
import { ToastsService } from 'src/app/services/toasts/toasts.service';
import { ValidateError } from 'src/app/utils/validate-error';

@Component({
  selector: 'app-customers-details',
  templateUrl: './customers-details.component.html',
  styleUrls: ['./customers-details.component.css', '../../../../styles.css'],
})
export class CustomersDetailsComponent implements OnInit {
  id!: number;
  customer = new Customer();

  constructor(
    private toastService: ToastsService,
    private modalService: NgbModal,
    private customerService: CustomerApiService,
    private router: Router,
    private route: ActivatedRoute,
    private utils: ValidateError,
  ) { }

  navigateToTable() {
    return this.router.navigate(['/customers']);
  }

  openDelete(id: number) {
    const modalRef = this.modalService.open(DeleteModalComponent);
    modalRef.componentInstance.description = 'cliente';
    modalRef.componentInstance.deleteData.subscribe(() => {
      this.customerService.deleteCustomer(id).subscribe((res) => {
        this.toastService.showSuccess(res.body.msg);
        this.navigateToTable();
      }, (err: HttpErrorResponse) => {
        this.utils.validateError(err)
      })
    })
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.customerService.findById(this.id).subscribe((data) => {
        this.customer = data;
      });
    }
  }
}
