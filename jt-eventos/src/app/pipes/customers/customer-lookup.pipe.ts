import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from 'src/app/classes/customers/customer';

@Pipe({
  name: 'customerLookup',
  pure: false
})
export class CustomerLookupPipe implements PipeTransform {

  transform(customers: Customer[], text?: string): Customer[] {
    const term = text?.toLowerCase() ? text : ''.toLowerCase();
    return customers.filter((data) =>
      data.name.toLowerCase().includes(term) ||
      data.cpf.includes(term) ||
      data.email.toLowerCase().includes(term) ||
      data.mobileNumber.includes(term)
    );
  }
}
