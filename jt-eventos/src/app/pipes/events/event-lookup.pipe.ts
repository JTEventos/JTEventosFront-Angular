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
      data.eventTypeId.toString().toLowerCase().includes(term) ||
      data.customerId.toString().toLowerCase().includes(term) ||
      data.establishmentId.toString().toLowerCase().includes(term) ||
      data.startDate.toDateString().includes(term) ||
      data.finishDate.toDateString().includes(term)
    );
  }
}
