import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-types-edit',
  templateUrl: './event-types-edit.component.html',
  styleUrls: ['./event-types-edit.component.css', '../../../styles.css']
})
export class EventTypesEditComponent implements OnInit {
  title = "Edição de Tipo de Evento"

  constructor() { }

  ngOnInit(): void {
  }

}
