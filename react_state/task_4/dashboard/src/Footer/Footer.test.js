import React from 'react';
import Footer from './Footer';
import { shallow, mount } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import { AppContext } from '../App/AppContext';

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

  it('Footer renders at least the text: Copyright', () => {
    expect(wrapper.text()).to.contain('Copyright');
  });

  it('verify that the link is not displayed when the user is logged out within the context', () => {
    const context = {
      user: {
        isLoggedIn: false,
      },
    };
    const wrapper = mount(
      <AppContext.Provider value={context}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('a')).toHaveLength(0);
  });

  it('verify that the link is displayed when the user is logged in within the context', () => {
    const context = {
      user: {
        isLoggedIn: true,
      },
    };
    const wrapper = mount(
      <AppContext.Provider value={context}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('a')).toHaveLength(1);
  });
});