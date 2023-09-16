import React from 'react';
import Header from "./Header";
import { shallow, mount } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

describe('test Header component', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('Header renders without crashing', () => {
    shallow(<Header />);
  });

  it('Header renders img', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists('img')).toEqual(true);
  });

  it('Header renders h1', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists('h1')).toEqual(true);
  });

  it('Verify that the logoutSection is not created', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists('#logoutSection')).toBe(false);
  });

  it('Verify that the logoutSection is created', () => {
    const user = {
      email: 'test@example.com',
      isLoggedIn: true,
    };
    const wrapper = mount(<Header />, {
      context: { user },
    });
    expect(wrapper.exists('#logoutSection')).toBe(true);
  });

  it('Clicking on the logout link calls the logOut function', () => {
    const user = {
      email: 'test@example.com',
      isLoggedIn: true,
    };
    const logOutSpy = jest.fn();
    const wrapper = mount(<Header />, {
      context: { user, logOut: logOutSpy },
    });
    const logoutLink = wrapper.find('a');
    logoutLink.simulate('click');
    expect(logOutSpy).toHaveBeenCalled();
  });
});