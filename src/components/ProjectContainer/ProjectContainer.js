import { useState } from 'react'
import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import VideoModal from '../VideoModal/VideoModal'
import ProjectImageCarousel from './ProjectImageCarousel'
import './ProjectContainer.css'

const resolveAssetPath = (path) =>
  path.startsWith('http') ? path : `${process.env.PUBLIC_URL + path}`

const ProjectContainer = ({ project }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  const hasCarousel = project.images?.length > 0
  const videoPoster =
    project.video && project.images?.length ? project.images[0] : undefined

  return (
  <div className='project'>
    {/* Image Section */}
    {hasCarousel && (
      <div className='project__image-wrapper'>
        <ProjectImageCarousel images={project.images} alt={project.name} />
        <div className='project__image-overlay' />
      </div>
    )}

    {!hasCarousel && project.image && (
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

        {project.video && (
          <button
            type='button'
            aria-label='watch demo video'
            className='project__link project__link--button'
            onClick={() => setIsVideoOpen(true)}
          >
            <PlayCircleOutlineIcon />
            <span>Preview</span>
          </button>
        )}
      </div>
    </div>

    {project.video && isVideoOpen && (
      <VideoModal
        title={project.name}
        src={project.video}
        poster={videoPoster ? resolveAssetPath(videoPoster) : undefined}
        onClose={() => setIsVideoOpen(false)}
      />
    )}
  </div>
  )
}

export default ProjectContainer