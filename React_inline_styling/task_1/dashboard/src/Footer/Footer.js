import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import './Footer.css'

export default function Footer() {
  return (
    <>
      <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
    </>
  )
}
