import React from 'react';
import operate from '../logic/operate';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
// import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: '',
      operation: '',
    };
    this.updateCalcData = this.updateCalcData.bind(this);
    this.handleEqual = this.handleEqual.bind(this);
  }

  updateCalcData = input => {
    const { total, operation, next } = this.state;

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
        } else if (
          next === ''
          && operation === ''
          && !total.includes('.')
        ) {
          this.setState(prevState => ({ total: prevState.total + input }));
        }
        break;
      default:
        break;
    }
  };

  handleEqual = () => {
    const { total, operation, next } = this.state;
    let result = '';
    if (
      total !== 0
      && operation !== ''
      && next > 0
    ) {
      result = operate(parseFloat(total, 10), parseFloat(next, 10), operation).toString();
    }
    this.setState({
      total: result,
      operation: '',
      next: '',
    });
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="w-4/5 sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4">
        <Display total={total} next={next} operation={operation} />
        <ButtonPanel
          updateCalc={this.updateCalcData}
          handleEqual={this.handleEqual}
        />
      </div>
    );
  }
}

export default App;
