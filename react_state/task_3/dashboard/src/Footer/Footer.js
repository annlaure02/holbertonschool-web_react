import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import './Footer.css';
import { AppContext } from '../App/AppContext';

export default function Footer() {
  return (
    <AppContext.Consumer >
      {({ user }) => (
        <>
          <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
          {user.isLoggedIn &&
            <p>
              <a href='#'>Contact us</a>
            </p>
          }
        </>
      )}
    </AppContext.Consumer>
  )
}
