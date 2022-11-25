import { Injectable } from '@angular/core';
import { EventType } from 'src/app/classes/event-types/event-type';

@Injectable({
  providedIn: 'root'
})
export class EventTypeService {
  listEventType: EventType[] = [
    { _id: 1, description: 'Casamento' },
    { _id: 2, description: 'Aniversário' }
  ]

  constructor() { }

  findAll() {
    return this.listEventType;
  }

  findById(id: number) {
    const eventType = this.listEventType.find(eventType => eventType._id === id);
    return eventType ?eventType: new EventType();
  }

  createEventType(eventType: EventType) {
    this.listEventType.push(eventType);
  }

  updateEventType(id: number, eventType: EventType) {
    const index = this.getIndex(id);
    if (index >= 0) {
      this.listEventType[index] = eventType;
    }
  }

  delete(id: number) {
    const index = this.getIndex(id);
    if (index >= 0) {
      this.listEventType.slice(index, 1);
    }
  }

  private getIndex(id: number) {
    return this.listEventType.findIndex(establishment => establishment._id === id);
  }
}
