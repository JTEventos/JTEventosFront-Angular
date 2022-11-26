import { Pipe, PipeTransform } from '@angular/core';
import { Establishment } from 'src/app/classes/establishments/establishment';

@Pipe({
  name: 'establishmentLookup',
  pure: false
})
export class EstablishmentLookupPipe implements PipeTransform {

  transform(establishments: Establishment[], text?: string): Establishment[] {
    const term = text ? text : '';
    term.toLowerCase();
    return establishments.filter((data) => {
			data.description.toLowerCase().includes(term) ||
			data.cep.includes(term) ||
			data.street.toLowerCase().includes(term) ||
      data.streetNumber.includes(term) ||
      data.streetComplement.toLowerCase().includes(term) ||
      data.neighborhood.toLowerCase().includes(term) ||
      data.city.toLowerCase().includes(term) ||
      data.state.toLowerCase().includes(term)
    });
  }
}
