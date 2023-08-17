import { calculateTaxes } from ".";

describe('calculateTaxes', () => {

  it('should return the correct taxes', () => {
    expect(calculateTaxes(1000, 1)).toEqual(30);
  });
});
