import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, picture } = about

  return (
    <div className='about center'>
      <div className='about__header'>
        {picture && (
          <img
            src={
              picture.startsWith('http')
                ? picture
                : `${process.env.PUBLIC_URL}/images/${picture}`
            }
            alt={name}
            className='about__picture'
          />
        )}

    <div className='about__intro'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>
      </div>
      </div>
    </div>
  )
}

export default About
