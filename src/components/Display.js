import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
  const { total, operation, next } = props;
  return (
    <div className="bg-black text-white text-5xl w-full h-18 p-2 flex justify-end items-end rounded-t-lg border-white border-4 border-b-0 select-all">
      {`${total} ${operation} ${next}`}
    </div>
  );
}

Display.propTypes = {
  total: PropTypes.string,
  next: PropTypes.string,
  operation: PropTypes.string,
};

Display.defaultProps = {
  total: '0',
  next: PropTypes.string,
  operation: PropTypes.string,
};

export default Display;
