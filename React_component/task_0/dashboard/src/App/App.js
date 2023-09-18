import React, { Component } from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listCourses: [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 },
      ],
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, html: { __html: getLatestNotification() } },
      ],
    };
  }

  render() {
    const { isLoggedIn } = this.props;
    const { listCourses, listNotifications } = this.state;
    return (
      <>
        <div>
          <Notifications listNotifications={listNotifications} />
        </div>
        <div className="App">
          <Header />
          {isLoggedIn ? (
            <CourseList listCourses={listCourses} />
          ) : (
            <Login />
          )}
          <Footer />
        </div>
      </>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
}

export default App;