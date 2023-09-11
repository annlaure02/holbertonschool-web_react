import React from 'react';
import Login from './Login';
import { shallow } from 'enzyme';

describe('test Login component', () => {
  const wrapper = shallow(<Login />);

  it('Login renders without crashing', () => {
    shallow(<Login />);
  });

  it('Login renders 2 input', () => {
    expect(wrapper.find('input')).to.have.lengthOf(2);
  });

  it('Login renders 2 label', () => {
    expect(wrapper.find('label')).to.have.lengthOf(2);
  });
});