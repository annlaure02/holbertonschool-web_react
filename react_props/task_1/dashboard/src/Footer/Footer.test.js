import React from 'react';
import Footer from './Footer';
import { shallow } from 'enzyme';

describe('test Footer component', () => {
  it('Footer renders without crashing', () => {
    shallow(<Footer />);
  });

  it('Footer renders 2 input', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toContain('Copyright');
  });
});