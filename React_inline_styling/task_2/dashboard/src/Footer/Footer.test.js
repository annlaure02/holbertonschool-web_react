import React from 'react';
import Footer from './Footer';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

describe('test Footer component', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  const wrapper = shallow(<Footer />);

  it('Footer renders without crashing', () => {
    shallow(<Footer />);
  });

  it('Footer renders 2 input', () => {
    expect(wrapper.text()).to.contain('Copyright');
  });
});