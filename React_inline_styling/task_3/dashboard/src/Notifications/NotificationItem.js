import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


class NotificationItem extends PureComponent {

  render() {
    const { type, value, html, markAsRead, id } = this.props;

    const liColor = css(type === 'default' ? styles.default : styles.urgent);

    if (html) {
      return <li
        dangerouslySetInnerHTML={html}
        onClick={() => markAsRead(id)}
        className={css(styles.urgent)}>
      </li>
    }
    return <li
      data-priority={type}
      onClick={() => markAsRead(id)}
      className={liColor}>
      {value}</li>
  }
};

const styles = StyleSheet.create({
  default: {
    color: 'darkblue',
    marginLeft: 50,
    '@media (max-width: 900px)': {
			width: '100%',
			fontSize: 20,
      borderBottom: '1px solid black',
      listStyleType: 'none',
      padding: '10px 8px',
      marginLeft: 0,
		},
  },
  urgent: {
    color: 'red',
    marginLeft: 50,
    '@media (max-width: 900px)': {
      width: '100%',
      fontSize: 20,
      borderBottom: '1px solid black',
      listStyleType: 'none',
      padding: '10px 8px',
      marginLeft: 0,
    },
  },
});

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  markAsRead: PropTypes.func,
}

NotificationItem.defaultProps = {
  type: "default",
  markAsRead: () => { },
}

export default NotificationItem;