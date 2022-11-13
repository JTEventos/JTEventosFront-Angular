import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-establishments-details',
  templateUrl: './establishments-details.component.html',
  styleUrls: ['./establishments-details.component.css', '../../../styles.css']
})
export class EstablishmentsDetailsComponent implements OnInit {
  title = "Detalhes do Estabelecimento"

  constructor() { }

  ngOnInit(): void {
  }

}
