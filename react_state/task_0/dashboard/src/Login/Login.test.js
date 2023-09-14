import React from 'react';
import Login from './Login';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

describe('test Login component', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('Login renders without crashing', () => {
    shallow(<Login />);
  });

  it('Login renders 2 input', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input')).to.have.lengthOf(2);
  });

  it('Login renders 2 label', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('label')).to.have.lengthOf(2);
  });
});