import operate from './operate'

describe('common operations are working', () => {
  it('2 + 2 should be 4', () => {
    expect(parseInt(operate("2", "2", "+"))).toEqual(4);
  });
  it("2 + 2 should not be 6", () => {
    expect(parseInt(operate("2", "2", "+"))).not.toEqual(6);
  });
  it("2 * 2 should be 4", () => {
    expect(parseInt(operate("2", "2", "x"))).toEqual(4);
  });
  it("2 * 2 should not be 6", () => {
    expect(parseInt(operate("2", "2", "x"))).not.toEqual(6);
  });
  it("2 / 2 should be 1", () => {
    expect(parseInt(operate("2", "2", "/"))).toEqual(1);
  });
  it("2 / 2 should not be 5", () => {
    expect(parseInt(operate("2", "2", "/"))).not.toEqual(5);
  });
  it("10 - 2 should be 8", () => {
    expect(parseInt(operate("10", "2", "-"))).toEqual(8);
  });
  it("10 - 2 should not be 5", () => {
    expect(parseInt(operate("10", "2", "-"))).not.toEqual(5);
  });
  it("10 % 2 should be 0", () => {
    expect(parseInt(operate("10", "2", "%"))).toEqual(0);
  });
  it("10 % 2 should not be 1", () => {
    expect(parseInt(operate("10", "2", "%"))).not.toEqual(1);
  });
});

describe('Data types check', () => {
  it('Returned result is of type Numeric', () => {
    expect(typeof parseInt(operate('2', '2', '+'))).toBe("number")
  })
  it("Returned result is of type Numeric", () => {
    expect(typeof parseInt(operate("2", "2", "+"))).not.toBe("object");
  });
  it("Returned result is of type Numeric", () => {
    expect(typeof operate("2", "2", "+")).toBe("object");
  });
  it("Returned result is of type Numeric", () => {
    expect(typeof operate("2", "2", "+")).not.toBe("number");
  });
})
