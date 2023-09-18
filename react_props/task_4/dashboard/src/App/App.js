import React from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer'
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList'

function App({ isLoggedIn }) {
  return (
    <>
      <div>
        <Notifications />
      </div>
      <div className="App">
        <Header />
        {isLoggedIn ? (
          <CourseList />
        ) : (
          <Login />
        )}
        <Footer />
      </div>
    </>
  );
}

App.defaultProps = {
  isLoggedIn: false,
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
}

export default App;
