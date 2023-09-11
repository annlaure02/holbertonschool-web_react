import React from 'react';
import Header from "./Header";
import { shallow } from 'enzyme';

describe('test Header component', () => {
  const wrapper = shallow(<Header />);

  it('Header renders without crashing', () => {
    shallow(<Header />);
  });

  it('Header renders img', () => {
    expect(wrapper.exists('img')).to.equal(true);
  });

  it('Header renders h1', () => {
    expect(wrapper.exists('h1')).to.equal(true);
  });
});