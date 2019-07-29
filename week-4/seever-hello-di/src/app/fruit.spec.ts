import { Fruit } from './fruit/fruit';

describe('Fruit', () => {
  it('should create an instance', () => {
    expect(new Fruit(0, "Cherry", "Red")).toBeTruthy();
  });
});
