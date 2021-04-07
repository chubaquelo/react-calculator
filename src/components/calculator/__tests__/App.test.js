import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

describe('Test App Snapshot', () => {
  it('matches App snapshot', () => {
    const forTest = renderer.create(<App />).toJSON();
    expect(forTest).toMatchSnapshot();
  });
});
