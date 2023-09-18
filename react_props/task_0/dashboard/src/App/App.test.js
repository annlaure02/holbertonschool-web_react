import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('test App', () => {
  it('App renders without crashing', () => {
    shallow(<App />);
  });
});
