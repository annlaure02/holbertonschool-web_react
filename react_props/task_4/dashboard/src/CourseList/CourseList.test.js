import { shallow } from 'enzyme';
import CourseList from './CourseList'; 

describe('test CourseList', () => {
  it('CourseList renders without crashing', () => {
    shallow(<CourseList />);
  });

  it('CourseListRow renders two cells when textSecondCell is present', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find('tr')).to.have.lengthOf(5);

    expect(wrapper.find('tr').at(0).text()).toBe('Available courses');
    expect(wrapper.find('tr').at(1).text()).toBe('Course name');
    expect(wrapper.find('tr').at(2).text()).toBe('ES6');
    expect(wrapper.find('tr').at(3).text()).toBe('Webpack');
    expect(wrapper.find('tr').at(4).text()).toBe('React');
  });
});