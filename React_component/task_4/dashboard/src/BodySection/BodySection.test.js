import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe('test BodySection Component', () => {
  it('renders correctly with title and children', () => {
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );
    
    expect(wrapper.find('h2').text()).toEqual('test title');
    expect(wrapper.find('p').text()).toEqual('test children node');
  });
});