import Big from 'big.js';

const operate = (numOne, numTwo, operation) => {
  const first = Big(numOne);
  const second = Big(numTwo);
  let result = 0;

  switch (operation) {
    case '+':
      result = first.plus(second);
      break;

    case '-':
      result = first.minus(second);
      break;

    case 'x':
      result = first.times(second);
      break;

    case '%':
      result = first.mod(second);
      break;

    case '/':
      result = first.div(second);
      break;

    default:
      break;
  }
  return result;
};

export default operate;
