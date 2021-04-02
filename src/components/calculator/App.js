import React from 'react';
import operate from './logic/operate';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from './logic/calculate';

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

  updateCalcData = btnName => {
    const input = this.state;
    this.setState(calculate(input, btnName));
  }

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
      <div className="w-screen text-center flex justify-center">
        <div className="w-4/5 sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4">
          <Display total={total} next={next} operation={operation} />
          <ButtonPanel
            updateCalc={this.updateCalcData}
            handleEqual={this.handleEqual}
          />
        </div>
      </div>
    );
  }
}

export default App;
