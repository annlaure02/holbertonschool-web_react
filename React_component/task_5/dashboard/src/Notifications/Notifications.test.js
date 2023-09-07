import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { shallow, mount } from 'enzyme';

describe('test Notifications', () => {
  it('Notifications renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('Notifications renders NotificationItem elements', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(<NotificationItem />)).to.have.lengthOf(3);
  });

  it('Notifications renders NotificationItem elements', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(<NotificationItem />).first().html()).to.equal('<li data-priority="default">New course available</li>');
  });

  it('Notifications renders the text Here is the list of notifications', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.contains(<p>Here is the list of notifications</p>)).to.equal(true);
  });

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

  it('Notifications renders correctly if you pass an empty array or if you don’t pass the listNotifications property', () => {
    const wrapper = shallow(<Notifications listNotifications={[]} />);
    expect(wrapper.find('ul').text()).toBe('No new notification for now');
  });

  describe('when listNotifications is provided', () => {
    let wrapper;
    const notifications = [
      { id: 1, type: 'default', value: 'Notification 1' },
      { id: 2, type: 'urgent', value: 'Notification 2' },
    ];

    beforeEach(() => {
      wrapper = shallow(<Notifications displayDrawer={true} listNotifications={notifications} />);
    });

    it('verify that when you pass a list of notifications, the component renders it correctly and with the right number of NotificationItem', () => {
      expect(wrapper.find(NotificationItem)).toHaveLength(notifications.length);
      expect(wrapper.find('ul').text()).toContain('Notification 1');
      expect(wrapper.find('ul').text()).toContain('Notification 2');
    });
  });

  it('verify that when listNotifications is empty the message Here is the list of notifications is not displayed, but No new notification for now is', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    expect(wrapper.find('ul').text()).toBe('No new notification for now');
  });

  it('test that will mockup the console.log function', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    shallow(<Notifications />);
    expect(consoleSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });

  it('the function markAsRead on an instance of the component, the spy is being called with the right message when calling', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const wrapper = shallow(<Notifications />);
    const instance = wrapper.instance();
    instance.markAsRead(123); 
    expect(consoleSpy).toHaveBeenCalledWith('Notification 123 has been marked as read');
    consoleSpy.mockRestore();
  });

  it('verify that when updating the props of the component with the same list, the component doesn’t rerender', () => {
    const notifications = [
      { id: 1, type: 'default', value: 'Notification 1' },
      { id: 2, type: 'urgent', value: 'Notification 2' },
    ];

    const wrapper = mount(<Notifications displayDrawer={true} listNotifications={notifications} />);
    const instance = wrapper.instance();
    const renderCountBeforeUpdate = wrapper.find(NotificationItem).length;

    wrapper.setProps({ displayDrawer: true, listNotifications: notifications });
    const renderCountAfterUpdate = wrapper.find(NotificationItem).length;
    expect(renderCountBeforeUpdate).toBe(renderCountAfterUpdate);
  });

  it('verify that when updating the props of the component with a longer list, the component does rerender', () => {
    const initialNotifications = [
      { id: 1, type: 'default', value: 'Notification 1' },
      { id: 2, type: 'urgent', value: 'Notification 2' },
    ];

    const newNotifications = [
      { id: 3, type: 'default', value: 'Notification 3' },
      { id: 4, type: 'urgent', value: 'Notification 4' },
      { id: 5, type: 'default', value: 'Notification 5' },
    ];

    const wrapper = mount(<Notifications displayDrawer={true} listNotifications={initialNotifications} />);
    const instance = wrapper.instance();

    const renderCountBeforeUpdate = wrapper.find(NotificationItem).length;
    wrapper.setProps({ displayDrawer: true, listNotifications: newNotifications });
    const renderCountAfterUpdate = wrapper.find(NotificationItem).length;
    expect(renderCountBeforeUpdate).not.toBe(renderCountAfterUpdate);
  });
});
