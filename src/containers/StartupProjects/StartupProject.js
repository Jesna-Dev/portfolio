import './StartupProjects.scss'

import React, { useContext } from 'react'

import { Fade } from 'react-reveal'
import StyleContext from '../../contexts/StyleContext'
import { bigProjects } from '../../portfolio'

export default function StartupProject() {
  function openUrlInNewTab(url) {
    if (!url) {
      return
    }
    var win = window.open(url, '_blank')
    win.focus()
  }

  const { isDark } = useContext(StyleContext)
  if (!bigProjects.display) {
    return null
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading" style={{ margin: 0 }}>
            {bigProjects.title}
          </h1>
          <p
            className={
              isDark
                ? 'dark-mode project-subtitle'
                : 'subTitle project-subtitle'
            }
            style={{ marginTop: 0 }}>
            {bigProjects.subtitle}
          </p>

          <div className="projects-container">
            {bigProjects.projects.map((project, i) => {
              return (
                <div
                  key={i}
                  className={
                    isDark
                      ? 'dark-mode project-card project-card-dark'
                      : 'project-card project-card-light'
                  }
                  style={{ justifyContent: 'start' }}>
                  {project.image ? (
                    <div className="project-image">
                      <img
                        src={project.image}
                        alt={project.projectName}
                        className="card-image"
                        style={{
                          width: '100%',
                          height: '250px',
                          objectFit: 'cover',
                          borderRadius: '12px'
                        }}
                      />
                    </div>
                  ) : null}
                  <div className="project-detail">
                    <h5
                      className={isDark ? 'dark-mode card-title' : 'card-title'}
                      style={{ textAlign: 'left', marginTop: '22px' }}>
                      {project.projectName}
                    </h5>
                    <p
                      className={
                        isDark ? 'dark-mode card-subtitle' : 'card-subtitle'
                      }
                      style={{
                        textAlign: 'left'
                      }}>
                      {project.projectDesc}
                    </p>
                    {project.footerLink ? (
                      <div className="project-card-footer">
                        {project.footerLink.map((link, i) => {
                          return (
                            <span
                              key={i}
                              className={
                                isDark ? 'dark-mode project-tag' : 'project-tag'
                              }
                              onClick={() => openUrlInNewTab(link.url)}>
                              {link.name}
                            </span>
                          )
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Fade>
  )
}
