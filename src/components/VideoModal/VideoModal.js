import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import CloseIcon from '@material-ui/icons/Close'
import './VideoModal.css'

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'

const VideoModal = ({ title, src, poster, onClose }) => {
  const dialogRef = useRef(null)
  const [videoFailed, setVideoFailed] = useState(false)

  useEffect(() => {
    const previouslyFocused = document.activeElement

    const closeButton = dialogRef.current?.querySelector('.video-modal__close')
    closeButton?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }

      if (event.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll(FOCUSABLE_SELECTOR)
        if (!focusable.length) return

        const first = focusable[0]
        const last = focusable[focusable.length - 1]

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
      previouslyFocused?.focus?.()
    }
  }, [onClose])

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) onClose()
  }

  return createPortal(
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className='video-modal__overlay' onMouseDown={handleOverlayClick}>
      <div
        className='video-modal'
        role='dialog'
        aria-modal='true'
        aria-label={`${title} demo video`}
        ref={dialogRef}
      >
        <button
          type='button'
          className='video-modal__close'
          aria-label='Close video'
          onClick={onClose}
        >
          <CloseIcon />
        </button>

        {videoFailed ? (
          <div className='video-modal__fallback'>
            <p>The video couldn&apos;t be loaded.</p>
            <a href={src} target='_blank' rel='noreferrer' className='video-modal__fallback-link'>
              Open video directly
            </a>
          </div>
        ) : (
          // eslint-disable-next-line jsx-a11y/media-has-caption -- no caption track exists for these release-hosted demo videos
          <video
            className='video-modal__video'
            controls
            preload='none'
            poster={poster}
            onError={() => setVideoFailed(true)}
          >
            <source src={src} type='video/mp4' />
            Your browser does not support embedded video.
          </video>
        )}
      </div>
    </div>,
    document.body
  )
}

export default VideoModal
