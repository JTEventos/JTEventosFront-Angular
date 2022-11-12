import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers-edit',
  templateUrl: './customers-edit.component.html',
  styleUrls: ['./customers-edit.component.css', '../../../styles.css']
})
export class CustomersEditComponent implements OnInit {
  title = "Edição de Cliente"

  constructor() { }

  ngOnInit(): void {
  }

}
