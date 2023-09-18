import React from 'react';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { shallow } from 'enzyme';
import { getLatestNotification } from '../utils/utils';

describe('test Notifications', () => {
  it('Notifications renders without crashing', () => {
    shallow(<Notifications />);
  });

  describe('test notifications', () => {

    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, html: { __html: getLatestNotification() } },
    ];

    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    });

    it('Notifications renders NotificationItem elements', () => {
      expect(wrapper.find(NotificationItem)).toHaveLength(3);
    });

    it('Notifications renders NotificationItem elements', () => {
      expect(wrapper.find(NotificationItem).first().html()).toEqual('<li data-priority="default">New course available</li>');
    });

    it('Notifications renders the text Here is the list of notifications', () => {
      expect(wrapper.contains(<p>Here is the list of notifications</p>)).toEqual(true);
    })

    it('check that the menu item is being displayed when displayDrawer is false', () => {
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

    it('Notifications renders correctly if you pass an empty array or if you don’t pass the listNotifications property', () => {
      expect(wrapper.find('p').at(1).text()).toEqual('Here is the list of notifications');    });

    it('verify that when you pass a list of notifications, the component renders it correctly and with the right number of NotificationItem', () => {
      expect(wrapper.find(NotificationItem)).toHaveLength(3);
    });

    it('verify that when listNotifications is empty the message Here is the list of notifications is not displayed, but No new notification for now is', () => {
      const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
      expect(wrapper.find('ul').text()).toBe('No new notification for now');
    });
  });
});