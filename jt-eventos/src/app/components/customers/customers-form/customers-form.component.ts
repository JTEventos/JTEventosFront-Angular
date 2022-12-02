import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CancelModalComponent } from '../../modals/cancel-modal/cancel-modal.component';
import { ToastsService } from 'src/app/services/toasts/toasts.service';
import { Customer } from 'src/app/classes/customers/customer';
import { CustomerApiService } from 'src/app/services/customers/customer-api.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    private route: ActivatedRoute
  ) { }

	cancel() {
		const modalRef = this.modalService.open(CancelModalComponent);
    modalRef.componentInstance.cancelData.subscribe(() => {
      this.router.navigate(['/customers']);
    })
	}

  save() {
    if (!this.id) {
      this.customerService.createCustomer(this.customer).subscribe((customer) => {
        this.customer = new Customer();
        this.router.navigate(['/customers']);
        this.toastService.showSuccess('Cadastro realizado com sucesso.');
      });
    } else {
      this.customerService.updateCustomer(this.id, this.customer).subscribe((data) => {
        this.customer = data;
        this.router.navigate(['/customers']);
        this.toastService.showSuccess('Edição realizada com sucesso.');
      });
    }
  }

  clearForm() {
    this.customer.cep = '';
    this.customer.street = '';
    this.customer.neighborhood = '';
    this.customer.city = '';
    this.customer.state = '';
  }

  myCallback(body: any) {
    if (!('erro' in body)) {
      this.customer.street = body.logradouro;
      this.customer.neighborhood = body.bairro;
      this.customer.city = body.localidade;
      this.customer.state = body.uf;
    } else {
      this.toastService.showDanger('CEP informado não encontrado.')
      this.clearForm();
    }
  }

  async searchCep() {
    var cep = this.customer.cep.replace(/\D/g, '');
    if (cep != '') {
      var validateCep = /^[0-9]{8}$/;
      if (validateCep.test(cep)) {
        const body = await (await fetch(`https://viacep.com.br/ws/${cep}/json`)).json();
        this.myCallback(body);
      } else {
        this.toastService.showWarning('CEP informado com formato inválido.')
        this.clearForm();
      }
    } else {
      this.clearForm();
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

