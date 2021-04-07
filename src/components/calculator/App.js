import React, { useState } from 'react';
import operate from './logic/operate';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from './logic/calculate';

const App = () => {
  const [calcState, setCalcState] = useState({
    total: '0',
    next: '',
    operation: '',
  });

  const updateCalcData = btnName => {
    const input = calcState;
    setCalcState(calculate(input, btnName));
  };

  const handleEqual = () => {
    const { total, operation, next } = calcState;
    let result = '0';
    if (
      total !== 0
      && operation !== ''
      && next > 0
    ) {
      result = operate(parseFloat(total, 10), parseFloat(next, 10), operation).toString();
    }
    setCalcState({
      total: result,
      operation: '',
      next: '',
    });
  };

  return (
    <div className="w-screen text-center flex justify-center">
      <div className="w-4/5 sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4">
        <Display total={calcState.total} next={calcState.next} operation={calcState.operation} />
        <ButtonPanel
          updateCalc={updateCalcData}
          handleEqual={handleEqual}
        />
      </div>
    </div>
  );
};

export default App;
