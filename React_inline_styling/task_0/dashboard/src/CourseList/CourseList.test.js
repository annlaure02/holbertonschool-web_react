import React from 'react';
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

  describe('listCourses props', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<CourseList listCourses={[]} />);
    });

    it('CourseList renders correctly if you pass an empty array or if you don’t pass the listCourses property', () => {
      expect(wrapper.find('tbody CourseListRow').text()).toBe('No course available yet');
    });
  });

  describe('listCourses props', () => {
    let wrapper;
    const courses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];

    beforeEach(() => {
      wrapper = shallow(<CourseList listCourses={courses} />);
    });

    it('verify that when you pass a list of courses, the component renders it correctly', () => {
      expect(wrapper.find('tbody CourseListRow').at(2).text()).toContain('ES6');
      expect(wrapper.find('tbody CourseListRow').at(3).text()).toContain('Webpack');
      expect(wrapper.find('tbody CourseListRow').at(4).text()).toContain('React');
    });
  });
});