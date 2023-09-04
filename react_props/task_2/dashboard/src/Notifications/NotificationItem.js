import React from 'react'

export default function NotificationItem({type, value, html}) {
  if (html) {
    return <li dangerouslySetInnerHTML={html}></li>
  }
  return <li data-priority={type}>{value}</li>
}
