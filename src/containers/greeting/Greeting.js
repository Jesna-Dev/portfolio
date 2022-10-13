import './Greeting.scss'

import React, { useContext } from 'react'
import { greeting, illustration } from '../../portfolio'

import Button from '../../components/button/Button'
import DisplayLottie from '../../components/displayLottie/DisplayLottie'
import { Fade } from 'react-reveal'
import SocialMedia from '../../components/socialMedia/SocialMedia'
import StyleContext from '../../contexts/StyleContext'
import emoji from 'react-easy-emoji'
import workingGirl from '../../assets/lottie/workingGirl'

export default function Greeting() {
  const { isDark } = useContext(StyleContext)
  if (!greeting.displayGreeting) {
    return null
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={
                  isDark ? 'dark-mode greeting-text' : 'greeting-text'
                }>
                {' '}
                {greeting.title}{' '}
                <span className="wave-emoji">{emoji('👋')}</span>
              </h1>
              <p
                className={
                  isDark
                    ? 'dark-mode greeting-text-p'
                    : 'greeting-text-p subTitle'
                }
                style={{ lineHeight: '22px' }}>
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                <Button
                  text="See my resume"
                  newTab={true}
                  href="https://github.com/Jesna-Dev/portfolio/blob/main/jesna-k-elizabeth.pdf">
                  See my resume
                </Button>
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={workingGirl} />
            ) : (
              <img
                alt="man sitting on table"
                src={require('../../assets/images/manOnTable.svg')}></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  )
}
