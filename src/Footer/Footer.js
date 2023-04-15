import React from 'react'
import './FooterApp.css'
import instagram from './images/instagram.svg'
import linkedin from './images/linkedin.svg'
import twitter from './images/twitter.svg'
import email from './images/envelope-solid.svg'

export const Footer = () => {
  return (
    <div>
      <div className="card footer" id='connect'>
        <h2 className='footer-text'>Mit.Portfolio</h2>
        <span className='line'></span>
        <div className="iconss">
          <a href='https://www.linkedin.com/in/meet-panchal-531ba1237'><img src={linkedin} className='logos' /></a>
          <a href='https://instagram.com/meet8960?igshid=ZDdkNTZiNTM='><img src={instagram} className='logos' /></a>
          <a href=''><img src={twitter} className='logos' /></a>
          <a href='mailto:meetpanchal1048@gmail.com'><img src={email} className='logos' /></a>
        </div>
        <p className='copyright'>&copy; 2023 Mit.Portfolio. All Rights Reserved.</p>
      </div>
    </div>
  )
}
