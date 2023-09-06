import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('test NotificationItem', () => {
  it('Notifications renders without crashing', () => {
    shallow(<NotificationItem />);
  });

  it('NotificationItem renders the correct html by passing dummy type and value props', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.find("li").html()).to.equal('<li data-priority="default">test</li>');
  });

  it('NotificationItem renders the correct html by passing dummy html prop', () => {
    const wrapper = shallow(<NotificationItem html={{ __html: '<u>test<000000/u>' }} />);
    expect(wrapper.find("li").props('html')).to.equal('<u>test<000000/u>');
  });

  it('simulating a click on the component, the spy is called with the right ID argument', () => {
    const markAsReadSpy = jest.fn();
    const id = 123;

    const wrapper = shallow(<NotificationItem markAsRead={markAsReadSpy} id={id} />);
    
    wrapper.find("li").simulate("click");

    expect(markAsReadSpy).toHaveBeenCalledWith(id);
  });
});