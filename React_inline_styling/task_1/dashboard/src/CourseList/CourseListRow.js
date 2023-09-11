import React from 'react';
import PropTypes from 'prop-types';

export default function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const rowStyle = {
    background: isHeader ? '#deb5b545' : '#f5f5f5ab',
  }

  if (isHeader === true) {
    if (textSecondCell === null) {
      return (
        <>
          <tr style={rowStyle}>
            <th colSpan="2">{textFirstCell}</th>
          </tr>
        </>
      )
    }
    return (
      <>
        <tr style={rowStyle}>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </tr>
      </>
    )
  }
  if (isHeader === false) {
    return (
      <>
        <tr style={rowStyle}>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </tr>
      </>
    )
  }
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
}
