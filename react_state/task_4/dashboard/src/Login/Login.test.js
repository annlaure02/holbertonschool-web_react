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

  it('verify that the submit button is disabled by default', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('button[type="submit"]').prop('disabled')).toBe(true);
  });

  it('verify that after changing the value of the two inputs, the button is enabled', () => {
    const wrapper = shallow(<Login />);
    const emailInput = wrapper.find('input[name="email"]');
    const passwordInput = wrapper.find('input[name="password"]');
    const submitButton = wrapper.find('button[type="submit"]');
    
    emailInput.simulate('change', { target: { value: 'test@example.com' } });
    passwordInput.simulate('change', { target: { value: 'password123' } });
    expect(submitButton.prop('disabled')).toBe(false);
  });
});