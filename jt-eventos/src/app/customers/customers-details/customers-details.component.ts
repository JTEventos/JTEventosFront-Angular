import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers-details',
  templateUrl: './customers-details.component.html',
  styleUrls: ['./customers-details.component.css', '../../../styles.css']
})
export class CustomersDetailsComponent implements OnInit {
  title = "Detalhes do Cliente"

  constructor() { }

  ngOnInit(): void {
  }

}
