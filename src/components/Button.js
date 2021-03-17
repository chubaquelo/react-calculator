import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ btnName, addClass }) {
  let btnStyle = 'border-white border-2 w-1/4 h-12 flex justify-center items-center bg-red-500 text-white font-black cursor-pointer hover:bg-red-900 text-xl';
  btnStyle += ` ${addClass}`;

  return <div className={btnStyle}>{btnName}</div>;
}

Button.propTypes = {
  btnName: PropTypes.string,
  addClass: PropTypes.string,
};

Button.defaultProps = {
  btnName: 'NONE',
  addClass: '',
};
