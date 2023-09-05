import React from 'react';
import PropTypes from 'prop-types';

export default function NotificationItem({type, value, html}) {
  if (html) {
    return <li dangerouslySetInnerHTML={html}></li>
  }
  return <li data-priority={type}>{value}</li>
}

NotificationItem.PropTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
}

NotificationItem.defaultProps = {
  type: "default",
}
