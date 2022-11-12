import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers-create',
  templateUrl: './customers-create.component.html',
  styleUrls: ['./customers-create.component.css', '../../../styles.css']
})
export class CustomersCreateComponent implements OnInit {
  title = "Cadastro de Cliente"

  constructor() { }

  ngOnInit(): void {
  }

}
