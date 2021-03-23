import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default function ButtonPanel({ updateCalc, handleEqual }) {
  return (
    <>
      <div className="w-full border-white border-4 border-b-0 flex flex-wrap">
        <Button
          btnName="AC"
          updateCalc={updateCalc}
          addClass="bg-blue-300 hover:bg-blue-600"
        />
        <Button
          btnName="+/-"
          updateCalc={updateCalc}
          addClass="bg-blue-300 hover:bg-blue-600"
        />
        <Button
          btnName="%"
          updateCalc={updateCalc}
          addClass="bg-blue-300 hover:bg-blue-600"
        />
        <Button
          btnName="/"
          updateCalc={updateCalc}
          addClass="bg-blue-300 hover:bg-blue-600"
        />
      </div>
      <div className="w-full border-white border-4 border-b-0 flex flex-wrap">
        <Button btnName="7" updateCalc={updateCalc} addClass="text-3xl" />
        <Button btnName="8" updateCalc={updateCalc} addClass="text-3xl" />
        <Button btnName="9" updateCalc={updateCalc} addClass="text-3xl" />
        <Button
          btnName="x"
          updateCalc={updateCalc}
          addClass="bg-blue-300 hover:bg-blue-600"
        />
      </div>
      <div className="w-full border-white border-4 border-b-0 flex flex-wrap">
        <Button btnName="4" updateCalc={updateCalc} addClass="text-3xl" />
        <Button btnName="5" updateCalc={updateCalc} addClass="text-3xl" />
        <Button btnName="6" updateCalc={updateCalc} addClass="text-3xl" />
        <Button
          btnName="-"
          updateCalc={updateCalc}
          addClass="bg-blue-300 hover:bg-blue-600"
        />
      </div>
      <div className="w-full border-white border-4 border-b-0 flex flex-wrap">
        <Button btnName="1" updateCalc={updateCalc} addClass="text-3xl" />
        <Button btnName="2" updateCalc={updateCalc} addClass="text-3xl" />
        <Button btnName="3" updateCalc={updateCalc} addClass="text-3xl" />
        <Button
          btnName="+"
          updateCalc={updateCalc}
          addClass="bg-blue-300 hover:bg-blue-600"
        />
      </div>
      <div className="w-full border-white border-4 flex flex-wrap">
        <Button btnName="0" updateCalc={updateCalc} addClass="w-2/4 text-3xl" />
        <Button btnName="." updateCalc={updateCalc} addClass="text-3xl" />
        <Button
          btnName="="
          updateCalc={handleEqual}
          addClass="text-3xl bg-blue-400 hover:bg-blue-900"
        />
      </div>
    </>
  );
}

ButtonPanel.propTypes = {
  updateCalc: PropTypes.func,
  handleEqual: PropTypes.func,
};

ButtonPanel.defaultProps = {
  updateCalc: 0,
  handleEqual: 0,
};
