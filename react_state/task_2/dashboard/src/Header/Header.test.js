import React from 'react';
import Header from "./Header";
import { shallow } from 'enzyme';
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
    expect(wrapper.exists('img')).to.equal(true);
  });

  it('Header renders h1', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists('h1')).to.equal(true);
  });
});