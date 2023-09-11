import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';


export default function Header() {
  return (
    <div className={css(styles.header)}>
      <img src={logo} className={css(styles.logo)} alt="logo" />
      <h1 className={css(styles.h1)}>School dashboard</h1>
    </div>
  )
}

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
  }
})
