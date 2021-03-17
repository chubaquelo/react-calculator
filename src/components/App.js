import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

function App() {
  return (
    <div className="w-4/5 sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4">
      <Display />
      <ButtonPanel />
    </div>
  );
}

export default App;
