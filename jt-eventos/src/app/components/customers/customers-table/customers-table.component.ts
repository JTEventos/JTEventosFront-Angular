import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { map, Observable, startWith } from 'rxjs';
import { Customer } from 'src/app/classes/customers/customer';
import { CustomerApiService } from 'src/app/services/customers/customer-api.service';
import { CustomersDetailsComponent } from '../customers-details/customers-details.component';
import { CustomersFormComponent } from '../customers-form/customers-form.component';

@Component({
  selector: 'app-customers-table',
  templateUrl: './customers-table.component.html',
  styleUrls: ['./customers-table.component.css', '../../../../styles.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class CustomersTableComponent implements OnInit {
  title = "Clientes";
  searchField = '';
  list: Customer[] = [];

  filter = new FormControl('', { nonNullable: true });

  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    private cutomerService: CustomerApiService,
  ) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;

    this.findAll();
  }

  findAll() {
    this.cutomerService.findAll().subscribe((data) => {
      this.list = data
    });
  }

  createCustomer() {
    const modalRef = this.modalService.open(CustomersFormComponent, { centered: true });
    modalRef.componentInstance.title = 'Cadastro';
  }

  detailCustomer() {
    this.modalService.open(CustomersDetailsComponent, { centered: true });
  }

  ngOnInit(): void { }
}
