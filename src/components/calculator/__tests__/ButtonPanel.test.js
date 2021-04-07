import React from 'react';
import renderer from 'react-test-renderer';
import ButtonPanel from '../ButtonPanel';

describe.only('Test ButtonPanel Snapshot', () => {
  it('matches ButtonPanel snapshot', () => {
    const forTest = renderer.create(<ButtonPanel />).toJSON();
    expect(forTest).toMatchSnapshot();
  });
});
