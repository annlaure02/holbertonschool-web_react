import React from 'react';
import Header from "./Header";
import { shallow } from 'enzyme';

describe('test Header component', () => {
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
});