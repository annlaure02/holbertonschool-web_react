import React, { Component } from 'react';
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
    if (
      nextProps.listNotifications.length > this.props.listNotifications.length ||
      this.props.displayDrawer !== nextProps.displayDrawer
      ) {
      return true;
    }
    return false;
  }

  render() {
    const { displayDrawer, listNotifications, handleDisplayDrawer, handleHideDrawer } = this.props;
    const dislayMenuItem = css(displayDrawer ? styles.unshowMenuItem : styles.showMenuItem);
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
        <div className={dislayMenuItem} onClick={handleDisplayDrawer} >
          <p>Your notifications</p>
        </div>
        {displayDrawer &&
          <div className={css(styles.notifications)} >
            <button
              style={buttonStyle}
              arial-label='Close'
              onClick={handleHideDrawer}>
              <img src={closeIcon} alt='Close Icon' height="10px"></img>
            </button>
            {listNotifications.length === 0 &&
              <p>No new notification for now</p>
            }
            {listNotifications.length > 0 &&
              <>
                <p className={css(styles.p)}>Here is the list of notifications</p>
                <ul className={css(styles.ul)}>
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

const opacityKeyframes = {
  'from': {
    opacity: 0.5,
  },
  'to': {
    opacity: 1,
  }
}

const translateKeyframes = {
  '0%': {
    transform: 'translateY(0)',
  },
  '33%': {
    transform: 'translateY(-5px)',
  },
  '66%': {
    transform: 'translateY(5)',
  },
  '100%': {
    transform: 'translateY(0)',
  },
}

const styles = StyleSheet.create({
  notifications: {
    width: 600,
    position: 'absolute',
    right: 8,
    marginTop: 8,
    border: 'thin dashed #de4444',
    fontSize: 18,
    fontStyle: 'normal',
    backgroundColor: 'white',
    '@media (max-width: 900px)': {
      left: 0,
      border: 'none',
      width: '100%',
      height: '100%',
      fontSize: 20,
      margin: 0,
    }
  },
  ul: {
    paddingTop: 15,
    '@media (max-width: 900px)': {
      padding: 0,
    }
  },
  p: {
    fontSize: 20,
    fontStyle: 'normal',
  },
  showMenuItem: {
    position: 'absolute',
    right: 8,
    cursor: 'pointer',
    backgroundColor: '#fff8f8',
    ':hover': {
      animationName: [opacityKeyframes, translateKeyframes],
      animationDuration: '1s, 0.5s',
      animationIterationCount: 3,
    }
  },
  unshowMenuItem: {
    display: 'none',
  },
})

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => { },
  handleHideDrawer: () => { },
}

export default Notifications