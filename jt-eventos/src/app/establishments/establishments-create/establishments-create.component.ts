import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-establishments-create',
  templateUrl: './establishments-create.component.html',
  styleUrls: ['./establishments-create.component.css', '../../../styles.css']
})
export class EstablishmentsCreateComponent implements OnInit {
  title = "Cadastro de Estabelecimento"

  constructor() { }

  ngOnInit(): void {
  }

}
