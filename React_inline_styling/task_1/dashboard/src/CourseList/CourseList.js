import React from 'react';
import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';
import { StyleSheet, css } from 'aphrodite';

export default function CourseList({ listCourses }) {
  return (
    <table id='CourseList' className={css(styles.courseList)}>
      <thead>
        <CourseListRow isHeader={true} textFirstCell="Available courses" />
        <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
      </thead>
      <tbody>
        {listCourses.length === 0 && (
          <CourseListRow
            isHeader={false}
            textFirstCell="No course available yet" />
        )}
        {listCourses.map((course) => (
          <CourseListRow
            key={course.id}
            isHeader={false}
            textFirstCell={course.name}
            textSecondCell={course.credit} />
        ))}
      </tbody>
    </table>
  )
};

const styles = StyleSheet.create({
  courseList: {
    width: '90%',
    margin: 'auto',
    border: '2px solid #e6dfdf',
    borderCollapse: 'collapse',
    textAlign: 'left',
  },
});

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
}
