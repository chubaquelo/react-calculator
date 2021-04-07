import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../Button';

describe.only('Test Button Snapshot', () => {
  it('matches Button snapshot', () => {
    const forTest = renderer.create(<Button />).toJSON();
    expect(forTest).toMatchSnapshot();
  });
});
