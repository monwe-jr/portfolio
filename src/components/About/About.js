import { about, education } from '../../portfolio';
import './About.css';

const About = () => {
  const { name, role, description, picture } = about;
  const { school, gpa, status } = education;

  return (
    <section id='about' className='section about'>
      <div className='about__container'>
        <div className='about__image-wrapper'>
          <img src={picture} alt={name} className='about__image' />
        </div>

        <div className='about__content'>
          <h1 className='about__name'>{name}</h1>
          <h2 className='about__role'>{role}</h2>
          <p className='about__description'>{description}</p>

          <div className='about__stats'>
            <div className='about__stat'>
              <span className='about__stat-label'>University</span>
              <span className='about__stat-value'>{school}</span>
            </div>
            <div className='about__stat'>
              <span className='about__stat-label'>GPA</span>
              <span className='about__stat-value'>{gpa}</span>
            </div>
            <div className='about__stat'>
              <span className='about__stat-label'>Honors</span>
              <span className='about__stat-value'>{status}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
