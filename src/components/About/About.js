import React from 'react';
import { about, education } from '../../portfolio';
import './About.css';

const About = () => {
  const { name, role, description, picture } = about;
  const { school, gpa, status } = education;

  // Create an array of unique IDs once to avoid re-generating on every render
  const particles = React.useMemo(() => 
    [...Array(200)].map(() => ({
      id: Math.random().toString(36).substr(2, 9),
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${2 + Math.random() * 3}s`
    })), []);

  return (
    <div className='about-visual-root'>
      {particles.map((p) => (
        <div
          key={p.id} // Fixed: Using a unique ID instead of the index
          className="particle"
          style={{
            top: p.top,
            left: p.left,
            animationDelay: p.delay, 
            animationDuration: p.duration 
          }}
        />
      ))}

      <div className="bg-glow top-left" />
      <div className="bg-glow bottom-right" />

      <div className='about-container-wide'>
        <div className='profile-visual-wrapper'>
          <div className='ring-outer' />
          <div className='ring-inner' />
          <div className='glow-behind' />
          <div className='profile-image-frame'>
            <img
              src={picture}
              alt={name}
              className='profile-img'
            />
          </div>
        </div>

        <div className='content-side-wide'>
          <h1 className='name-hero'>
            Hi, I am <span className='gradient-text'>{name}</span>
          </h1>

          <h2 className='role-hero'>{role}</h2>

          <p className='desc-hero'>{description}</p>

          <div className='edu-bar-row'>
            <div className='edu-unit'>
              <span className='edu-label'>University</span>
              <span className='edu-value'>{school}</span>
            </div>
            <div className='edu-divider' />
            <div className='edu-unit'>
              <span className='edu-label'>GPA</span>
              <span className='edu-value'>{gpa}</span>
            </div>
            <div className='edu-divider' />
            <div className='edu-unit'>
              <span className='edu-label'>Honors</span>
              <span className='edu-value'>{status}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;