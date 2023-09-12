import React, { Component } from 'react';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { StyleSheet, css } from 'aphrodite';


class App extends Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress)
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress)
  }

  handleKeyPress(event) {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  }

  render() {
    const { isLoggedIn } = this.props;
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, html: { __html: getLatestNotification() } },
    ];

    return (
      <>
        <div>
          <Notifications listNotifications={listNotifications} />
        </div>
        <Header />
        <div className={css(styles.body)}>
          {isLoggedIn ? (
            <BodySectionWithMarginBottom title='Course list' >
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title='Log in to continue' >
              <Login />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title='News from the School'>
            <p>Random text in a paragraph</p>
          </BodySection>
        </div >
        <div className={css(styles.footer)} >
          <Footer />
        </div>
      </>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    marginTop: 60,
    marginLeft: 40,
    fontFamily: "Gill Sans"
  },
  footer: {
    display: 'flex',
    justifyContent: 'center',
    borderTop: '4px solid #da2323',
    height: 80,
    position: 'absolute',
    bottom: 0,
    width: '99%',
    fontFamily: "Gill Sans",
  }
});

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => { },
}

export default App;
