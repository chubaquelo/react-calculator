import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ btnName, addClass, updateCalc }) {
  let btnStyle = 'border-white select-none border-2 w-1/4 h-16 flex justify-center items-center bg-red-500 text-white font-black cursor-pointer hover:bg-red-900 text-xl';
  btnStyle += ` ${addClass}`;

  return <button type="button" className={btnStyle} onClick={() => updateCalc(btnName)}>{btnName}</button>;
}

Button.propTypes = {
  btnName: PropTypes.string,
  addClass: PropTypes.string,
  updateCalc: PropTypes.func,
};

Button.defaultProps = {
  btnName: 'NONE',
  addClass: '',
  updateCalc: 0,
};
