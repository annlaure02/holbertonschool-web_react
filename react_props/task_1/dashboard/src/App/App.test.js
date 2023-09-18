import React from 'react';
import Notifications from '../Notifications/Notifications';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import App from './App';
import { shallow } from 'enzyme';

describe('test App', () => {
  it('App renders without crashing', () => {
    shallow(<App />);
  });

  it('App contain the Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Notifications />)).toEqual(true);
  });

  it('App contain the Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Header />)).toEqual(true);
  });

  it('App contain the Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Login />)).toEqual(true);
  });

  it('App contain the Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Footer />)).toEqual(true);
  });
});
