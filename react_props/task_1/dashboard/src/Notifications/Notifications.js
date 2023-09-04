import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png'
import { getLatestNotification } from '../utils/utils'

function Notifications() {
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
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{__html: getLatestNotification()}}>
        </li>
      </ul>
    </div>
  )
}

export default Notifications