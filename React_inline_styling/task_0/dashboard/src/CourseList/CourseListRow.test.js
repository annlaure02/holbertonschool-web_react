import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow'; 

describe('test CourseListRow', () => {
  it('CourseListRow renders without crashing', () => {
    shallow(<CourseListRow />);
  });

  it('CourseListRow renders one cell with colspan = 2 when textSecondCell does not exist', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="first header cell" />);
    expect(wrapper.find('tr')).to.have.lengthOf(1);
    expect(wrapper.find('th').first().prop('colSpan')).to.be(2)
  });

  it('CourseListRow renders two cells when textSecondCell is present', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="first header cell" textSecondCell="second header cell" />);
    expect(wrapper.find('th')).to.have.lengthOf(2);
  });

  it('CourseListRow renders correctly two td elements within a tr element', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="first cell" />);
    expect(wrapper.find('tr')).to.have.lengthOf(1);
    expect(wrapper.find('td')).to.have.lengthOf(2);
  });
});