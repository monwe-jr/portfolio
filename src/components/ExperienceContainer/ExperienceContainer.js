import './ExperienceContainer.css'

const ExperienceContainer = ({ job }) => (
  <div className='experience__item'>
    <div className='experience__header'>
      <div className='experience__title-group'>
        <h3 className='experience__position'>{job.position}</h3>
        <p className='experience__company'>{job.company}</p>
      </div>
      <div className='experience__meta'>
        <p className='experience__date'>{job.date}</p>
        {job.location && (
          <p className='experience__location'>{job.location}</p>
        )}
      </div>
    </div>

    {job.description && (
      <ul className='experience__description'>
        {job.description.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    )}

    {job.stack && (
      <ul className='experience__stack'>
        {job.stack.map((tech) => (
          <li key={tech} className='experience__stack-item'>
            {tech}
          </li>
        ))}
      </ul>
    )}
  </div>
)

export default ExperienceContainer