import Notifications from './Notifications';
import { shallow } from 'enzyme';

describe('test Notifications', () => {
  it('Notifications renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('Notifications renders three list items', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find("li")).to.have.lengthOf(3);
  })

  it('Notifications renders the text Here is the list of notifications', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.contains(<p>Here is the list of notifications</p>)).to.equal(true);
  })
});