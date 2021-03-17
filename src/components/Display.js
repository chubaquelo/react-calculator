import React from 'react';
import PropTypes from 'prop-types';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: '',
    };
  }

  render() {
    const { result } = this.props;
    const { test } = this.state;
    return (
      <div className="bg-black text-white text-5xl w-full h-18 p-2 flex justify-end items-end rounded-t-lg border-white border-4 border-b-0">
        {result}
        {test}
      </div>
    );
  }
}

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
