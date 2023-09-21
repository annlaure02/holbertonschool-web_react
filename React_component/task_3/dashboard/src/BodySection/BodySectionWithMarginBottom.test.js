import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';

describe('BodySectionWithMarginBottom Component', () => {
  it('renders BodySection component with correct props', () => {
    const title = "test title";
    const children = <p>test children node</p>;
    
    const wrapper = shallow(
      <BodySectionWithMarginBottom title={title}>
        {children}
      </BodySectionWithMarginBottom>
    );
    expect(wrapper.find(BodySection).exists()).toBe(true);

    const bodySection = wrapper.find(BodySection);

    expect(bodySection.prop('title')).toEqual(title);
    expect(bodySection.prop('children')).toEqual(children);
  });
});