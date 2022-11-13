import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

interface Establishment {
	description: string;
  cep: string;
  street: string;
  streetNumber: string;
  streetComplement: string;
  neighborhood: string;
  city: string;
  state: string;
}

const ESTABLISHMENTS: Establishment[] = [
	{
    description: "Casa de Festas Palhaço Pimpão",
    cep: "91000000",
    street: "Rua B",
    streetNumber: "321",
    streetComplement: "Andar 2",
    neighborhood: "Igara",
    city: "Canoas",
    state: "RS",
	},
	{
    description: "Salão Gostas de Prata",
    cep: "92000000",
    street: "Avenida Tiradentes",
    streetNumber: "786",
    streetComplement: "",
    neighborhood: "São Geraldo",
    city: "Curitiba",
    state: "PR",
	},
];

function search(text: string): Establishment[] {
	return ESTABLISHMENTS.filter((establishment) => {
		const term = text.toLowerCase();
		return (
			establishment.description.toLowerCase().includes(term) ||
			establishment.cep.includes(term) ||
			establishment.street.toLowerCase().includes(term) ||
      establishment.streetNumber.includes(term) ||
      establishment.streetComplement.toLowerCase().includes(term) ||
      establishment.neighborhood.toLowerCase().includes(term) ||
      establishment.city.toLowerCase().includes(term) ||
      establishment.state.toLowerCase().includes(term)
		);
	});
}

@Component({
  selector: 'app-establishments-table',
  templateUrl: './establishments-table.component.html',
  styleUrls: ['./establishments-table.component.css', '../../../styles.css']
})
export class EstablishmentsTableComponent implements OnInit {
  title = "Estabelecimentos"
  establishments$: Observable<Establishment[]>;
  filter = new FormControl('', { nonNullable: true });

  constructor() {
    this.establishments$ = this.filter.valueChanges.pipe(
      startWith(''),
      map((text) => search(text)),
    );
  }

  ngOnInit(): void {
  }

}
