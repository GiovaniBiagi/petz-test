import { formatCurrency } from ".";

describe("formatCurrency", () => {
  it("should return 0 when value is 0", () => {
    expect(formatCurrency(0)).toBe("R$ 0,00");
  });

  it("should return the value formatted", () => {
    expect(formatCurrency(100)).toBe("R$ 100,00");
  });
});
