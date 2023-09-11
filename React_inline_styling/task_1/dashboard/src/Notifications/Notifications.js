import React, { Component } from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png'
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  };

  shouldComponentUpdate(nextProps) {
    if (nextProps.listNotifications.length > this.props.listNotifications.length) {
      return true;
    }
    return false;
  }  

  render() {
    const { displayDrawer, listNotifications } = this.props;

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
      <div>
        <div className='menuItem'>
          <p>Your notifications</p>
        </div>
        {displayDrawer &&
          <div className={css(styles.notificationsPanel)} >
            <button
              style={buttonStyle}
              arial-label='Close'
              onClick={() => {
                console.log('Close button has been clicked');
              }}>
              <img src={closeIcon} alt='Close Icon' height="10px"></img>
            </button>
            {listNotifications.length === 0 &&
              <p>No new notification for now</p>
            }
            {listNotifications.length > 0 &&
              <>
                <p>Here is the list of notifications</p>
                <ul>
                  {listNotifications.map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      html={notification.html}
                      type={notification.type}
                      value={notification.value}
                      markAsRead={this.markAsRead}
                      id={notification.id} />
                  ))
                  }
                </ul>
              </>
            }
          </div>
        }
      </div>
    )
  }
}

const styles = StyleSheet.create({
  notificationsPanel: {
    border: 'thin dashed #de4444',
    padding: '20px 50px 20px 8px',
    position: 'absolute',
    right: 10,
    fontSize: 18,
  }
})

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
}

export default Notifications