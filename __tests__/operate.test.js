// import Big from 'big.js';
import operate from '../src/logic/operate';

describe('operations are working correctly', () => {
  it('Should return the sum of two numbers', () => {
    expect(operate(1, 2, '+')).toEqual(3);
  });
});

// it("Should return the sum of two numbers", () => {
//   expect(operate(1, 2, "+")).toEqual(3);
// });
