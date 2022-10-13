import './Contact.scss'

import React, { useContext } from 'react'
import { contactInfo, illustration } from '../../portfolio'

import DisplayLottie from '../../components/displayLottie/DisplayLottie'
import { Fade } from 'react-reveal'
import SocialMedia from '../../components/socialMedia/SocialMedia'
import StyleContext from '../../contexts/StyleContext'
import email from '../../assets/lottie/email'

export default function Contact() {
  const { isDark } = useContext(StyleContext)
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title" style={{ marginBottom: 0 }}>
              {contactInfo.title}
            </h1>
            <p
              className={
                isDark
                  ? 'dark-mode contact-subtitle'
                  : 'subTitle contact-subtitle'
              }>
              {contactInfo.subtitle}
            </p>
            <div
              className={
                isDark ? 'dark-mode contact-text-div' : 'contact-text-div'
              }
              style={{ marginTop: 0 }}>
              {contactInfo.number && (
                <>
                  <a
                    className="contact-detail"
                    href={'tel:' + contactInfo.number}
                    style={{ fontSize: '22px' }}>
                    {contactInfo.number}
                  </a>
                  <br />
                  <br />
                </>
              )}
              <a
                className="contact-detail-email"
                href={'mailto:' + contactInfo.email_address}
                style={{ fontSize: '16px', marginTop: 0 }}>
                {contactInfo.email_address}
              </a>
              <br />
              <br />
              <SocialMedia />
            </div>
          </div>
          <div className="contact-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={email} />
            ) : (
              <img
                alt="Man working"
                src={require('../../assets/images/contactMailDark.svg')}></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  )
}
