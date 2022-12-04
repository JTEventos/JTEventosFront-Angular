import { Customer } from "../customers/customer";
import { Establishment } from "../establishments/establishment";
import { EventType } from "../event-types/event-type";

export class Event {
  _id!: number;
  eventTypeId: Array<EventType> = [];
  customerId: Array<Customer> = [];
  establishmentId: Array<Establishment> = [];
  description: string = '';
  startDate: Date = new Date();
  finishDate: Date = new Date();
  inviteList: string = '';
}
