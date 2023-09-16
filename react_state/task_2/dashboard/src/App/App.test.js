import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import App from './App';
import CourseList from '../CourseList/CourseList'
import { shallow } from 'enzyme';
import { expect, jest } from '@jest/globals';
import { StyleSheetTestUtils } from 'aphrodite';

describe('test App', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('App renders without crashing', () => {
    shallow(<App />);
  });

  it('App contain the Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists(<Notifications />)).to.equal(true);
  });

  it('App contain the Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists(<Header />)).to.equal(true);
  });

  it('App contain the Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists(<Login />)).to.equal(true);
  });

  it('App contain the Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists(<Footer />)).to.equal(true);
  });

  it('App check that CourseList is not displayed', () => {
    const wrapper = shallow(<App isLoggedIn={false} />);
    expect(wrapper.contains(<CourseList />)).toBe(false);
  });

  it('App verify that the Login component is not included and verify that the CourseList component is included', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.contains(<Login />)).toBe(false);
    expect(wrapper.contains(<CourseList />)).toBe(true);
  });

  it('logOut when the keys control and h are pressed', () => {
    const wrapper = shallow(<App />);
    const alert = jest.spyOn(global, 'alert');
    wrapper.instance().handleKeyPress({ ctrlKey: true, key: 'h' });
    expect(alert).toHaveBeenCalledWith('Logging you out');
    expect(wrapper.state().user.isLoggedIn).toBe(false);

    jest.restoreAllMocks();
  });

  it('verify that the default state for displayDrawer is false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toBe(false);
  });

  it('verify that after calling handleDisplayDrawer, the state should now be true', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toBe(true);
  });

  it('verify that after calling handleHideDrawer, the state is updated to be false', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ displayDrawer: true });
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state().displayDrawer).toBe(false);
  });

  it('verify that the logIn function updates the state correctly', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().logIn('test@example.com', '123456');
    expect(wrapper.state().user.isLoggedIn).toBe(true);
    expect(wrapper.state().user.email).toBe('test@example.com');
    expect(wrapper.state().user.password).toBe('123456');
  });

  it('verify that the logOut function updates the state correctly', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ user: { isLoggedIn: true, email: 'test@example.com', password: '123456' } });
    wrapper.instance().logOut();
    expect(wrapper.state().user.isLoggedIn).toBe(false);
    expect(wrapper.state().user.email).toBe('');
    expect(wrapper.state().user.password).toBe('');
  });

});
