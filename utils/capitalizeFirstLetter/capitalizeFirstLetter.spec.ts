import { capitalizeFirstLetter } from ".";

describe("utils/capitalizeFirstLetter", () => {
  it("should return empty string if parameter is empty", () => {
    expect(capitalizeFirstLetter("")).toBe("");
  });

  it("should capitalize the first letter of a simple string", () => {
    expect(capitalizeFirstLetter("test")).toBe("Test");
  });

  it("should capitalize the first letter of a string array", () => {
    expect(capitalizeFirstLetter(["test", "jest"])).toBe("Test Jest");
  });
});
