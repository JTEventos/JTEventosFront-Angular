import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from 'src/app/classes/customers/customer';
import { CustomerApiService } from 'src/app/services/customers/customer-api.service';

@Component({
  selector: 'app-customers-table',
  templateUrl: './customers-table.component.html',
  styleUrls: ['./customers-table.component.css', '../../../../styles.css']
})
export class CustomersTableComponent implements OnInit {
  title = "Clientes";
  searchField = '';
  list: Customer[] = [];

  filter = new FormControl('', { nonNullable: true });

  constructor(private cutomerService: CustomerApiService) {
    this.findAll();
  }

  findAll() {
    this.cutomerService.findAll().subscribe((data) => {
      this.list = data
    });
  }

  ngOnInit(): void { }
}
