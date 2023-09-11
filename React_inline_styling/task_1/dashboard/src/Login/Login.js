import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default function Login() {
  return (
    <>
      <p className={css(styles.p)} >
        Login to access the full dashboard
      </p>
      <label htmlFor="email" >Email:</label>
      <input className={css(styles.input)} type="email" id="email" name="email"></input>
      <label htmlFor="password" >Password:</label>
      <input type="password" id="password" name="password"></input>
      <button className={css(styles.button)}>OK</button>
    </>
    )
}

const styles = StyleSheet.create({
  p: {
    fontSize: 20
  },
  input: {
    border: '1px solid #dfd2d2',
    height: 20
  },
  button: {
    background: 'none',
    border: '1px solid #dfd2d2',
    borderRadius: 5,
    width: 30,
    height: 20,
    margin: 0,
  }
})
