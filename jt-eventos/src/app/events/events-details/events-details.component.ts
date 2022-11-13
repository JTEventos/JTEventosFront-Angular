import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-details',
  templateUrl: './events-details.component.html',
  styleUrls: ['./events-details.component.css', '../../../styles.css']
})
export class EventsDetailsComponent implements OnInit {
  title = "Detalhes do Evento"

  constructor() { }

  ngOnInit(): void {
  }

}
