import React, { Component } from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from '../App/AppContext';


class Header extends Component {
  constructor(props) {
    super(props);
  };
  
  render() {
    const { user, logOut } = this.context;
    return (
      <div className={css(styles.header)}>
        <img src={logo} className={css(styles.logo)} alt="logo" />
        <h1 className={css(styles.h1)}>School dashboard</h1>
        {user.isLoggedIn && 
          <section id='logoutSection' className={css(styles.section)} >
            Welcome <b>{user.email}</b> <a href='#' onClick={logOut}>(logout)</a>
          </section>
        }
      </div>
    )
  }
}

Header.contextType = AppContext;

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '4px solid #de4444',
    fontFamily: "Gill Sans"
  },
  logo: {
    height: 250,
    pointerEvents: 'none'
  },
  h1: {
    fontSize: 38,
    color: '#de4444'
  },
  section: {
    display: 'block',
    marginLeft: 50,
  }
})

export default Header;
