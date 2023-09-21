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

  it('simulating a click on the component, the spy is called with the right ID argument', () => {
    const markAsReadSpy = jest.fn();
    const id = 123;

    const wrapper = shallow(<NotificationItem markAsRead={markAsReadSpy} id={id} />);
    
    wrapper.find("li").simulate("click");

    expect(markAsReadSpy).toHaveBeenCalledWith(id);
  });
});