export class Establishment {
  _id!: number;
  description: string = '';
  cep: string = '';
  street: string = '';
  streetNumber: string = '';
  streetComplement!: string;
  neighborhood: string = '';
  city: string = '';
  state: string = '';
}
