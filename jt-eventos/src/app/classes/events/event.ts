export class Event {
  _id!: number;
  eventTypeId: number = 0;
  customerId: number = 0;
  establishmentId: number = 0;
  description: string = '';
  startDate: Date = new Date();
  finishDate: Date = new Date();
  inviteList: string = '';
}
