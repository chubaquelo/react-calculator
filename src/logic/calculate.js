// import Big from "big.js";

const calculate = input => {
  const { total, operation, next } = input;

  switch (input) {
    case '+':
    case '-':
    case '/':
    case 'x':
    case '%':
      if (parseFloat(total, 10) !== 0) {
        this.setState({ operation: input });
      }
      break;
    case '+/-':
      if (total.includes('-')) {
        this.setState({ total: 'sin -' });
      } else {
        this.setState(prevState => ({ total: '-'.concat(prevState.total) }));
      }
      break;
    case 'AC':
      this.setState({
        total: '0',
        next: '',
        operation: '',
      });
      window.console.log('Set to 0 with AC.');
      break;
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
        this.setState(prevState => ({ next: prevState.next + input }));
      }
      if (total === '0' && operation === '') {
        this.setState({ total: input });
      } else if (next === '' && operation === '') {
        this.setState(prevState => ({ total: prevState.total + input }));
      }
      break;
    case '.':
      if (operation !== '' && !next.includes('.')) {
        this.setState(prevState => ({ next: prevState.next + input }));
      }
      if (total === '0' && operation === '') {
        this.setState({ total: input });
      } else if (next === '' && operation === '' && !total.includes('.')) {
        this.setState(prevState => ({ total: prevState.total + input }));
      }
      break;
    default:
      break;
  }
};

export default calculate;
