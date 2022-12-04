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
      data.eventTypeId[0].description.toLowerCase().includes(term) ||
      data.customerId[0].name.toLowerCase().includes(term) ||
      data.establishmentId[0].description.toLowerCase().includes(term) ||
      data.startDate.toString().includes(term) ||
      data.finishDate.toString().includes(term)
    );
  }
}
