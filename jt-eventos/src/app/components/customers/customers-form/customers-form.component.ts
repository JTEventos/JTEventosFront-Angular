import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CancelModalComponent } from '../../modals/cancel-modal/cancel-modal.component';
import { ToastsService } from 'src/app/services/toasts/toasts.service';
import { Customer } from 'src/app/classes/customers/customer';
import { CustomerApiService } from 'src/app/services/customers/customer-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ValidateError } from 'src/app/utils/validate-error';
import { ViaCepService } from 'src/app/services/via-cep/via-cep.service';

@Component({
  selector: 'app-customers-form',
  templateUrl: './customers-form.component.html',
  styleUrls: ['./customers-form.component.css', '../../../../styles.css'],
})
export class CustomersFormComponent implements OnInit {
  title = 'Cadastro';
  id!: number;
  customer = new Customer();

  constructor(
    private toastService: ToastsService,
    private modalService: NgbModal,
    private customerService: CustomerApiService,
    private router: Router,
    private route: ActivatedRoute,
    private utils: ValidateError,
    public viaCep: ViaCepService
  ) { }

  navigateToTable() {
    return this.router.navigate(['/customers']);
  }

	cancel() {
		const modalRef = this.modalService.open(CancelModalComponent);
    modalRef.componentInstance.cancelData.subscribe(() => {
      this.navigateToTable();
    })
	}

  save() {
    if (!this.id) {
      this.customerService.createCustomer(this.customer).subscribe((res) => {
        this.toastService.showSuccess(res.body.msg);
        this.navigateToTable();
      }, (err: HttpErrorResponse) => {
        this.utils.validateError(err);
      });
    } else {
      this.customerService.updateCustomer(this.id, this.customer).subscribe((res) => {
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
      this.customerService.findById(this.id).subscribe((data) => {
        this.customer = data;
      });
    }
  }
}

