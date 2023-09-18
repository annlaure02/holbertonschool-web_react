import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('test CourseList', () => {
  const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CourseList listCourses={listCourses} />);
  });

  it('CourseList renders without crashing', () => {
    shallow(<CourseList />);
  });

  it('CourseListRow renders two cells when textSecondCell is present', () => {
    expect(wrapper.find(CourseListRow)).toHaveLength(5);
  });


  it('CourseList renders correctly if you pass an empty array or if you don’t pass the listCourses property', () => {
    wrapper = shallow(<CourseList />);
    expect(wrapper.find(CourseListRow).at(2).prop('textFirstCell')).toBe('No course available yet');
    expect(wrapper.find(CourseListRow)).toHaveLength(3);
  });
});