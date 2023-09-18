import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png'
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape'

function Notifications({ displayDrawer, listNotifications }) {
  const buttonStyle = {
    diplay: 'inline',
    position: 'absolute',
    top: '8px',
    right: '4px',
    cursor: 'pointer',
    background: 'transparent',
    border: 'none',
    color: 'red',
  }
  return (
    <>
      <div className='menuItem'>
        <p>Your notifications</p>
      </div>
      {displayDrawer &&
        <div className='Notifications'>
          <button
            style={buttonStyle}
            arial-label='Close'
            onClick={() => {
              console.log('Close button has been clicked');
            }}>
            <img src={closeIcon} alt='Close Icon' height="10px"></img>
          </button>
          <p>Here is the list of notifications</p>
          <ul>
            {listNotifications.length === 0 &&
              <p>No new notification for now</p>
            }
            {listNotifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                html={notification.html}
                type={notification.type}
                value={notification.value} />
            ))
            }
          </ul>
        </div>
      }
    </>
  )
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;