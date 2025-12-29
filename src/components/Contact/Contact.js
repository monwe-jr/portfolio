import { useState } from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import DescriptionIcon from '@material-ui/icons/Description'
import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const { email, resume, location, linkedin, github } = contact

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.message) {
      const mailtoLink = `mailto:${email}?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`
      window.location.href = mailtoLink
    }
  }

  return (
    <section className='section contact center' id='contact'>
      <div className='contact__wrapper'>
        <h2 className='section__title'>Reach Out</h2>
        
        <p className="contact__description">
          Looking for a software engineer focused on performance, reliability, and building efficient systems across software and hardware?
        </p>

        <div className='contact__location'>
          <LocationOnIcon />
          <span>{location}</span>
        </div>

        <form className='contact__form' onSubmit={handleSubmit}>
          <div className='form__group'>
            <label htmlFor='name' className='form__label'>
              Name
              <input
                type='text'
                id='name'
                name='name'
                required
                value={formData.name}
                onChange={handleChange}
                className='form__input'
              />
            </label>
          </div>

          <div className='form__group'>
            <label htmlFor='email' className='form__label'>
              Email
              <input
                type='email'
                id='email'
                name='email'
                required
                value={formData.email}
                onChange={handleChange}
                className='form__input'
              />
            </label>
          </div>

          <div className='form__group'>
            <label htmlFor='message' className='form__label'>
              Message
              <textarea
                id='message'
                name='message'
                required
                value={formData.message}
                onChange={handleChange}
                rows='5'
                className='form__textarea'
              />
            </label>
          </div>

          <button type='submit' className='btn btn--gradient'>
            send message
          </button>
        </form>

        <a
          href={`${process.env.PUBLIC_URL}${resume}`}
          target='_blank'
          rel='noopener noreferrer'
          className='btn btn--outline contact__resume'
        >
          <DescriptionIcon />
          view resume
        </a>

        <div className='contact__social'>
          <a href={`mailto:${email}`} aria-label='email' className='link link--icon'>
            <EmailIcon />
          </a>
          <a href={github} target='_blank' rel='noopener noreferrer' aria-label='github' className='link link--icon'>
            <GitHubIcon />
          </a>
          <a href={linkedin} target='_blank' rel='noopener noreferrer' aria-label='linkedin' className='link link--icon'>
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact