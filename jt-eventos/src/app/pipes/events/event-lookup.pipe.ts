import { Pipe, PipeTransform } from '@angular/core';
import { Event } from 'src/app/classes/events/event';

@Pipe({
  name: 'eventLookup',
  pure: false
})
export class EventLookupPipe implements PipeTransform {

  transform(events: Event[], text?: string): Event[] {
    const term = text?.toLowerCase() ? text : ''.toLowerCase();
    return events.filter((data) =>
      data.description.toLowerCase().includes(term) ||
      data.customerId.toString().toLowerCase().includes(term) ||
      data.establishmentId.toString().toLowerCase().includes(term) ||
      data.startDate.includes(term) ||
      data.finishDate.includes(term)
    );
  }
}
