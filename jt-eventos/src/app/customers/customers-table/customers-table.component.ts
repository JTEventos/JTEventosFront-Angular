import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { map, Observable, startWith } from 'rxjs';
import { CustomersCreateComponent } from '../customers-create/customers-create.component';
import { CustomersDetailsComponent } from '../customers-details/customers-details.component';

interface Customer {
  name: string;
  cpf: string;
  email: string;
  phoneNumber: string;
  mobileNumber: string;
  cep: string;
  street: string;
  streetNumber: string;
  streetComplement: string;
  neighborhood: string;
  city: string;
  state: string;
}

const CUSTOMERS: Customer[] = [
  {
    name: "Thiago Proença",
    cpf: "30030030030",
    email: "thiago@email.com",
    phoneNumber: "5133333333",
    mobileNumber: "51999999999",
    cep: "91000000",
    street: "Rua A",
    streetNumber: "123",
    streetComplement: "",
    neighborhood: "Petrópolis",
    city: "Porto Alegre",
    state: "RS",
  },
  {
    name: "Jonas Pohlmann",
    cpf: "19100000000",
    email: "jonas@email.com",
    phoneNumber: "5133333333",
    mobileNumber: "51999999999",
    cep: "11000000",
    street: "Avenida Floripa",
    streetNumber: "666",
    streetComplement: "Apt 12",
    neighborhood: "Ingleses",
    city: "Florianópolis",
    state: "SC",
  },
];

function search(text: string): Customer[] {
  return CUSTOMERS.filter((customer) => {
    const term = text.toLowerCase();
    return (
      customer.name.toLowerCase().includes(term) ||
      customer.cpf.includes(term) ||
      customer.email.toLowerCase().includes(term) ||
      customer.mobileNumber.includes(term)
    );
  });
}

@Component({
  selector: 'app-customers-table',
  templateUrl: './customers-table.component.html',
  styleUrls: ['./customers-table.component.css', '../../../styles.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class CustomersTableComponent implements OnInit {
  title = "Clientes"
  customers$: Observable<Customer[]>;
  filter = new FormControl('', { nonNullable: true });

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;

    this.customers$ = this.filter.valueChanges.pipe(
      startWith(''),
      map((text) => search(text)),
    );
  }

  createCustomer() {
    this.modalService.open(CustomersCreateComponent, { centered: true });
  }

  detailCustomer() {
    this.modalService.open(CustomersDetailsComponent, { centered: true });
  }

  ngOnInit(): void {
  }

}
