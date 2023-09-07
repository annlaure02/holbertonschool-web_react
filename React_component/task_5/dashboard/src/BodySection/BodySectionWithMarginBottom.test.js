import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';

describe('BodySectionWithMarginBottom Component', () => {
  it('renders BodySection component with correct props', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test title">
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );
    expect(wrapper.find(BodySection).exists()).toBe(true);

    const bodySection = wrapper.find(BodySection);

    expect(bodySection.prop('title')).toEqual(title);
    expect(bodySection.prop('children')).toEqual(children);
  });
});