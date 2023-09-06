import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends Component {

  render() {
    let { type, value, html, markAsRead, id } = this.props;

    if (html) {
      return <li dangerouslySetInnerHTML={html} onClick={() => markAsRead(id)} ></li>
    }
    return <li data-priority={type} onClick={() => markAsRead(id)} >{value}</li>
  }
}

NotificationItem.PropTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  markAsRead: PropTypes.func,
  id: PropTypes.number,
}

NotificationItem.defaultProps = {
  type: "default",
  markAsRead: () => { },
}

export default NotificationItem;