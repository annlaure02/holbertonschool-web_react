import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png'
import { getLatestNotification } from '../utils/utils'
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';


function Notifications({ displayDrawer }) {
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
            <NotificationItem type="default" value="New course available" />
            <NotificationItem type="urgent" value="New course available" />
            <NotificationItem html={{ __html: getLatestNotification() }} />
          </ul>
        </div>
      }
    </>
  )
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
}

Notifications.defaultProps = {
  displayDrawer: false,
}

export default Notifications