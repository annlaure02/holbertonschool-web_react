import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default function Login() {
  return (
    <div className={css(styles.loginContainer)}>
      <p className={css(styles.p)} >
        Login to access the full dashboard
      </p>
      <label htmlFor="email" >Email:</label>
      <input className={css(styles.input)} type="email" id="email" name="email"></input>
      <label htmlFor="password" >Password:</label>
      <input className={css(styles.input)} type="password" id="password" name="password"></input>
      <button className={css(styles.btn)}>OK</button>
    </div>
  )
}

const styles = StyleSheet.create({
  p: {
    fontSize: 20
  },
  input: {
    border: '1px solid #dfd2d2',
    height: 20,
    '@media (max-width: 900px)': {
      border: 'none',
      display: 'block',
    }
  },
  btn: {
    background: 'none',
    border: '1px solid #dfd2d2',
    borderRadius: 5,
    width: 30,
    height: 20,
    margin: 0,
    '@media (max-width: 900px)': {
      border: '5px solid  yellow',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 40,
      height: 30,
    }
  },
  loginContainer: {
    '@media (max-width: 900px)': {
      display: 'block',
    }
  }

})
