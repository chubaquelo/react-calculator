const calculate = (calcData, btnName) => {
  const { total, operation, next } = calcData;
  let res;

  switch (btnName) {
    case '+':
    case '-':
    case '/':
    case 'x':
    case '%':
      if (parseFloat(total, 10) !== 0) {
        return ({ operation: btnName });
      }
      break;
    case '+/-':
      if (total.includes('-')) {
        res = ({ total: 'sin -' });
      } else {
        res = (prevState => ({ total: '-'.concat(prevState.total) }));
      }
      return res;
    case 'AC':
      res = ({
        total: '0',
        next: '',
        operation: '',
      });
      return res;
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '0':
      if (operation !== '') {
        return (prevState => ({ next: prevState.next + btnName }));
      }
      if (total === '0' && operation === '') {
        res = { total: btnName };
      } else if (next === '' && operation === '') {
        res = (prevState => ({ total: prevState.total + btnName }));
      }
      return res;
    case '.':
      if (operation !== '' && !next.includes('.')) {
        return (prevState => ({ next: prevState.next + btnName }));
      }
      if (total === '0' && operation === '') {
        res = ({ total: btnName });
      } else if (next === '' && operation === '' && !total.includes('.')) {
        res = (prevState => ({ total: prevState.total + btnName }));
      }
      return res;
    default:
      break;
  }
  return null;
};

export default calculate;
