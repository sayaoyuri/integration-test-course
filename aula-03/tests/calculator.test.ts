import calculator from "../src/calculator";

describe('calculator test', () => {
  it('should sum 1 + 2 resulting in 3', () => {
    expect(calculator.sum(1, 2)).toBe(3)
  });

  it('should subtract 1-2 resulting in -1', () => {
    expect(calculator.sub(1, 2)).toBe(-1);
  });

  it('should multiply 1-2 resulting in 2', () => {
    expect(calculator.mul(1, 2)).toBe(2);
  });

  it('should divide 1-2 resulting in 0.5', () => {
    expect(calculator.div(1, 2)).toBe(0.5);
  });
});