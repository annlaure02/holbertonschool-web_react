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
      className={liColor}
      data-priority={type}
      onClick={() => markAsRead(id)}
      >
      {value}</li>
  }
}

const styles = StyleSheet.create({
  default: {
    color: 'darkblue',
    marginLeft: 50,
  },
  urgent: {
    color: 'red',
    marginLeft: 50,
  }
})

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