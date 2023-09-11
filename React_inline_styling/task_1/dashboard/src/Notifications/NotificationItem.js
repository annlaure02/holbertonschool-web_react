import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends PureComponent {

  render() {
    const { type, value, html, markAsRead, id } = this.props;

    if (html) {
      return <li dangerouslySetInnerHTML={html} onClick={() => markAsRead(id)} ></li>
    }
    return <li data-priority={type} onClick={() => markAsRead(id)} >{value}</li>
  }
}

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