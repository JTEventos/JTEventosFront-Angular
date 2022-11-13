import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-establishments-edit',
  templateUrl: './establishments-edit.component.html',
  styleUrls: ['./establishments-edit.component.css', '../../../styles.css']
})
export class EstablishmentsEditComponent implements OnInit {
  title = "Edição de Estabelecimento"

  constructor() { }

  ngOnInit(): void {
  }

}
