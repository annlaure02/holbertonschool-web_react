import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      enableSubmit: false,
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  };

  handleLoginSubmit() {
    const { email, password } = this.state;
    this.props.logIn(email, password);
  };

  handleChangeEmail(event) {
    const email = event.target;
    const password = this.state.password;

    if (email !== '' && password !== '') {
      this.setState({ enableSubmit: true });
    }
    else {
      this.setState({ enableSubmit: false });
    }

    this.setState({ email: event.target.value })
  }

  handleChangePassword(event) {
    const password = event.target;
    const email = this.state.password;

    if (email !== '' && password !== '') {
      this.setState({ enableSubmit: true });
    }
    else {
      this.setState({ enableSubmit: false });
    }
    this.setState({ password: event.target.value })
  }

  render() {
    return (
      <div className={css(styles.loginContainer)}>
        <p className={css(styles.p)} >
          Login to access the full dashboard
        </p>
        <form onSubmit={this.handleLoginSubmit}>
          <label htmlFor="email" >Email:</label>
          <input
            className={css(styles.input)}
            type="email"
            id="email"
            name="email"
            onChange={this.handleChangeEmail}
          ></input>
          <label htmlFor="password" >Password:</label>
          <input
            className={css(styles.input)}
            type="password"
            id="password"
            name="password"
            onChange={this.handleChangePassword}
          ></input>
          <input
            className={css(styles.btn)}
            type='submit'
            value='OK'
            disabled={!this.state.enableSubmit}
          ></input>
        </form>
      </div>
    )
  }
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

export default Login;