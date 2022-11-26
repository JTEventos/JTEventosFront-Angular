import { CustomerLookupPipe } from './customer-lookup.pipe';

describe('CustomerLookupPipe', () => {
  it('create an instance', () => {
    const pipe = new CustomerLookupPipe();
    expect(pipe).toBeTruthy();
  });
});
