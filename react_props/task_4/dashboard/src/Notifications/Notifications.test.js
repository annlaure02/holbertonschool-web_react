import React from 'react';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { shallow } from 'enzyme';

describe('test Notifications', () => {
  it('Notifications renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('Notifications renders NotificationItem elements', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  it('Notifications renders NotificationItem elements', () => {
    const wrapper = shallow(<Notifications displayDrawer={true}/>);
    expect(wrapper.find(NotificationItem).first().html()).toEqual('<li data-priority="default">New course available</li>');
  });

  it('Notifications renders the text Here is the list of notifications', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.contains(<p>Here is the list of notifications</p>)).toEqual(true);
  })

  it('check that the menu item is being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.exists('.menuItem')).toBe(true);
  });

  it('check that the div.Notifications is not being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.exists('.Notifications')).toBe(false);
  });

  it('check that the menu item is being displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.exists('.menuItem')).toBe(true);
  });

  it('check that the div.Notifications is being displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.exists('.Notifications')).toBe(true);
  });
});