import './AchievementCard.scss'

import Button from '../../components/button/Button'
import React from 'react'

export default function AchievementCard({ cardInfo, isDark }) {
  function openUrlInNewTab(url) {
    if (!url) {
      return
    }
    var win = window.open(url, '_blank')
    win.focus()
  }

  return (
    <div
      className={isDark ? 'dark-mode certificate-card' : 'certificate-card'}
      style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="certificate-image-div">
        <img
          src={cardInfo.image}
          alt="PWA"
          className="card-image"
          style={{
            width: '250px',
            height: '250px',
            objectFit: 'cover',
            borderRadius: '12px'
          }}
        />
      </div>
      <div className="certificate-detail-div">
        <h5
          className={isDark ? 'dark-mode card-title' : 'card-title'}
          style={{ textAlign: 'left', marginTop: '28px' }}>
          {cardInfo.title}
        </h5>
        <p
          className={isDark ? 'dark-mode card-subtitle' : 'card-subtitle'}
          style={{ textAlign: 'left' }}>
          {cardInfo.description}
        </p>
      </div>
      <div
        className="certificate-card-footer"
        style={{ display: 'flex', justifyContent: 'start', marginTop: 'auto' }}>
        {cardInfo.footer.map((v, i) => {
          return (
            <>
              <Button key={i} text="Certification" newTab={true} href={v.url} />
            </>
          )
        })}
      </div>
    </div>
  )
}
