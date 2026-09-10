import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import CloseIcon from '@material-ui/icons/Close'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import './ImageLightbox.css'

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'

const resolveAssetPath = (path) =>
  path.startsWith('http') ? path : `${process.env.PUBLIC_URL + path}`

const ImageLightbox = ({ images, alt, initialIndex, onClose }) => {
  const dialogRef = useRef(null)
  const [index, setIndex] = useState(initialIndex)
  const count = images.length

  const goTo = (next) => setIndex(((next % count) + count) % count)

  // Focus trap setup and restoration run once per mount so navigating
  // between images doesn't repeatedly steal focus back to the close button.
  useEffect(() => {
    const previouslyFocused = document.activeElement
    const closeButton = dialogRef.current?.querySelector('.image-lightbox__close')
    closeButton?.focus()
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = ''
      previouslyFocused?.focus?.()
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose(index)
        return
      }

      if (count > 1 && event.key === 'ArrowLeft') {
        event.preventDefault()
        goTo(index - 1)
        return
      }

      if (count > 1 && event.key === 'ArrowRight') {
        event.preventDefault()
        goTo(index + 1)
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
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [index, count, onClose])

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) onClose(index)
  }

  return createPortal(
    <div
      className='image-lightbox__overlay'
      role='presentation'
      onMouseDown={handleOverlayClick}
      onFocus={(event) => event.stopPropagation()}
      onBlur={(event) => event.stopPropagation()}
    >
      <div
        className='image-lightbox'
        role='dialog'
        aria-modal='true'
        aria-label={`${alt} full-size image ${index + 1} of ${count}`}
        ref={dialogRef}
      >
        <button
          type='button'
          className='image-lightbox__close'
          aria-label='Close image'
          onClick={() => onClose(index)}
        >
          <CloseIcon />
        </button>

        <img
          src={resolveAssetPath(images[index])}
          alt={`${alt} full-size ${index + 1} of ${count}`}
          className='image-lightbox__image'
        />

        {count > 1 && (
          <>
            <button
              type='button'
              aria-label='previous image'
              className='image-lightbox__arrow image-lightbox__arrow--prev'
              onClick={() => goTo(index - 1)}
            >
              <ChevronLeftIcon />
            </button>
            <button
              type='button'
              aria-label='next image'
              className='image-lightbox__arrow image-lightbox__arrow--next'
              onClick={() => goTo(index + 1)}
            >
              <ChevronRightIcon />
            </button>

            <div className='image-lightbox__dots'>
              {images.map((src, i) => (
                <button
                  key={src}
                  type='button'
                  aria-label={`go to image ${i + 1}`}
                  aria-current={i === index}
                  className={`image-lightbox__dot${i === index ? ' is-active' : ''}`}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>,
    document.body
  )
}

export default ImageLightbox
