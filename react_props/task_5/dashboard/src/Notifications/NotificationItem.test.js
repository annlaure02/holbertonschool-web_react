import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('test NotificationItem', () => {
  it('Notifications renders without crashing', () => {
    shallow(<NotificationItem />);
  });

  it('NotificationItem renders the correct html by passing dummy type and value props', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.html()).toContain('default');
    expect(wrapper.html()).toContain('test');
  });

  it('NotificationItem renders the correct html by passing dummy html prop', () => {
    const wrapper = shallow(<NotificationItem html={{ __html: 'dangerouslySetInnerHTML' }} />);
    expect(wrapper.html()).toContain('dangerouslySetInnerHTML');
  });
});