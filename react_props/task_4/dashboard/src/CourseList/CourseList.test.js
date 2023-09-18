import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('test CourseList', () => {
  it('CourseList renders without crashing', () => {
    shallow(<CourseList />);
  });

  it('CourseListRow renders two cells when textSecondCell is present', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find(CourseListRow)).toHaveLength(5);
  });
});