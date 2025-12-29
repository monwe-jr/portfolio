import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <div className='project'>
    {/* Image Section */}
    {project.image && (
      <div className='project__image-wrapper'>
        <img
          src={
            project.image.startsWith("http")
              ? project.image
              : `${process.env.PUBLIC_URL + project.image}`
          }
          alt={`${project.name} screenshot`}
          className='project__image'
        />
        <div className='project__image-overlay' />
      </div>
    )}

    {/* Content Section */}
    <div className='project__content'>
      <h3 className='project__title'>{project.name}</h3>

      <p className='project__description'>{project.description}</p>

      {/* Tech Stack */}
      {project.stack && (
        <ul className='project__stack'>
          {project.stack.map((item) => (
            <li key={uniqid()} className='project__stack-item'>
              {item}
            </li>
          ))}
        </ul>
      )}

      {/* Links */}
      <div className='project__links'>
        {project.sourceCode && (
          <a
            href={project.sourceCode}
            aria-label='source code'
            className='project__link'
          >
            <GitHubIcon />
            <span>Code</span>
          </a>
        )}

        {project.livePreview && (
          <a
            href={project.livePreview}
            aria-label='live preview'
            className='project__link'
          >
            <LaunchIcon />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </div>
  </div>
)

export default ProjectContainer