import React from 'react';
import Login from './Login';
import { shallow } from 'enzyme';

describe('test Login component', () => {
  it('Login renders without crashing', () => {
    shallow(<Login />);
  });

  it('Login renders 2 input', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input')).toHaveLength(2);
  });

  it('Login renders 2 label', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('label')).toHaveLength(2);
  });
});