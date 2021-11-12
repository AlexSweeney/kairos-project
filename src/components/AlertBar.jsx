import React from 'react';
import { 
  alertBarStyle,
  alertBarTextStyle,
  alertBarTextBoldStyle,
} from './../styles/AlertBar.js';
import './../styles/AlertBar.css';

export default function AlertBar() {
  return (
    <section className="alert-bar" style={alertBarStyle}>
      <h3 className="alert-bar-heading" style={alertBarTextStyle}>You are now viewing an <em style={alertBarTextBoldStyle}>IT Software</em> that has been verified by <em style={alertBarTextBoldStyle}>over 1 million users.</em></h3>
    </section> 
  )
}

