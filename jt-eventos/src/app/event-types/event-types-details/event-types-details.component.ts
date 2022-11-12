import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-types-details',
  templateUrl: './event-types-details.component.html',
  styleUrls: ['./event-types-details.component.css', '../../../styles.css']
})
export class EventTypesDetailsComponent implements OnInit {
  title = "Detalhes do Tipo de Evento"

  constructor() { }

  ngOnInit(): void {
  }

}
