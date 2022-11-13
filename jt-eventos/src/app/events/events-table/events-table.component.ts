import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

interface Events {
	description: string;
  customerName: string;
  establishmentDescription: string;
  startDate: string;
  finishDate: string;
  inviteList: string;
}

const EVENTS: Events[] = [
	{
    description: "Casamento Luzia",
    customerName: "Jonas Pohlmann",
    establishmentDescription: "Salão Gostas de Prata",
    startDate: "03/02/2023",
    finishDate: "04/02/2023",
    inviteList: "Thiago, Roberto, Bruna, Salem, Lorena",
	},
	{
    description: "Aniversário Thiago e Bruna",
    customerName: "Thiago Proença",
    establishmentDescription: "Casa de Festas Palhaço Pimpão",
    startDate: "29/10/2023",
    finishDate: "31/10/2023",
    inviteList: "Jonas, Roberto, Luzia, Salem, Lorena",
	},
];

function search(text: string): Events[] {
	return EVENTS.filter((event) => {
		const term = text.toLowerCase();
		return (
			event.description.toLowerCase().includes(term) ||
			event.customerName.toLowerCase().includes(term) ||
			event.establishmentDescription.toLowerCase().includes(term) ||
      event.startDate.includes(term) ||
      event.finishDate.includes(term)
		);
	});
}

@Component({
  selector: 'app-events-table',
  templateUrl: './events-table.component.html',
  styleUrls: ['./events-table.component.css', '../../../styles.css']
})
export class EventsTableComponent implements OnInit {
  title = "Eventos"
  events$: Observable<Events[]>;
  filter = new FormControl('', { nonNullable: true });

  constructor() {
    this.events$ = this.filter.valueChanges.pipe(
      startWith(''),
      map((text) => search(text)),
    );
  }

  ngOnInit(): void {
  }

}
