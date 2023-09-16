import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

export default function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const [checked, setChecked] = useState(null);
  const handleChecked = () => setChecked(!checked)
  const rowStyle = {
    background: isHeader ? '#deb5b545' : css(styles.rowBackground),
  }

  if (isHeader === true) {
    if (textSecondCell === null) {
      return (
        <>
          <tr style={rowStyle}>
            <th className={css(styles.thColspan)}
              colSpan="2">{textFirstCell}</th>
          </tr>
        </>
      )
    }
    return (
      <>
        <tr style={rowStyle}>
          <th className={css(styles.th)}>{textFirstCell}</th>
          <th className={css(styles.th)}>{textSecondCell}</th>
        </tr>
      </>
    )
  }
  if (isHeader === false) {
    return (
      <>
        <tr className={checked ? css(styles.rowChecked) : css(styles.rowBackground)}
          style={rowStyle}
        >
          <td><input type='checkbox' checked={checked} onChange={handleChecked} />{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </tr>
      </>
    )
  }
}

const styles = StyleSheet.create({
  thColspan: {
    textAlign: 'center',
  },
  th: {
    borderTop: '1px solid #e6dfdf',
    borderBottom: '1px solid #e6dfdf',
  },
  rowBackground: {
    backgroundColor: '#f5f5f5ab',
  },
  rowChecked: {
    backgroundColor: '#e6e4e4',
  },
})

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
