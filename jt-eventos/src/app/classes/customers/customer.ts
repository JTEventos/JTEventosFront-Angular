export class Customer {
  _id!: number;
  name: string = '';
  cpf: string = '';
  cep: string = '';
  street: string = '';
  streetNumber: string = '';
  streetComplement!: string;
  neighborhood: string = '';
  city: string = '';
  state: string = '';
  email: string = '';
  mobileNumber: string = '';
  phoneNumber!: string;
}
