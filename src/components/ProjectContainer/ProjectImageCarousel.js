import { useCallback, useEffect, useRef, useState } from 'react'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ZoomInIcon from '@material-ui/icons/ZoomIn'
import ImageLightbox from './ImageLightbox'
import './ProjectImageCarousel.css'

const AUTO_CYCLE_MS = 4500

const resolveAssetPath = (path) =>
  path.startsWith('http') ? path : `${process.env.PUBLIC_URL + path}`

const ProjectImageCarousel = ({ images, alt }) => {
  const count = images.length
  const [index, setIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [manuallyPaused, setManuallyPaused] = useState(false)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const suppressNextFocusRef = useRef(false)

  const goTo = useCallback(
    (next) => setIndex(((next % count) + count) % count),
    [count]
  )

  useEffect(() => {
    if (count <= 1 || isHovered || isFocused || manuallyPaused) return undefined

    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % count)
    }, AUTO_CYCLE_MS)

    return () => clearInterval(id)
  }, [count, isHovered, isFocused, manuallyPaused])

  if (count === 0) return null

  const handleManualNav = (next) => {
    setManuallyPaused(true)
    goTo(next)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      handleManualNav(index - 1)
    } else if (event.key === 'ArrowRight') {
      event.preventDefault()
      handleManualNav(index + 1)
    }
  }

  const handleControlClick = (event, next) => {
    event.stopPropagation()
    handleManualNav(next)
  }

  const handleLightboxClose = (finalIndex) => {
    setIsHovered(false)
    suppressNextFocusRef.current = true
    setIsFocused(false)
    if (finalIndex !== index) {
      setManuallyPaused(true)
    }
    setIndex(finalIndex)
    setIsLightboxOpen(false)
  }

  const handleFocus = () => {
    if (suppressNextFocusRef.current) {
      suppressNextFocusRef.current = false
      return
    }
    setIsFocused(true)
  }

  return (
    <div
      className={`project__carousel${isHovered || isFocused ? ' is-active' : ''}`}
      role='presentation'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={handleFocus}
      onBlur={() => setIsFocused(false)}
      onKeyDown={handleKeyDown}
    >
      {images.map((src, i) => {
        const distance = Math.min(Math.abs(i - index), count - Math.abs(i - index))
        const isNearVisible = distance <= 1

        return (
          <img
            key={src}
            src={isNearVisible ? resolveAssetPath(src) : undefined}
            alt={`${alt} screenshot ${i + 1} of ${count}`}
            loading='lazy'
            className={`project__carousel-image${i === index ? ' is-active' : ''}`}
          />
        )
      })}

      <button
        type='button'
        className='project__carousel-trigger'
        aria-label={`enlarge ${alt} image`}
        onClick={() => setIsLightboxOpen(true)}
      >
        <ZoomInIcon className='project__carousel-zoom-icon' />
      </button>

      {count > 1 && (
        <>
          <button
            type='button'
            aria-label='previous image'
            className='project__carousel-arrow project__carousel-arrow--prev'
            onClick={(event) => handleControlClick(event, index - 1)}
          >
            <ChevronLeftIcon />
          </button>
          <button
            type='button'
            aria-label='next image'
            className='project__carousel-arrow project__carousel-arrow--next'
            onClick={(event) => handleControlClick(event, index + 1)}
          >
            <ChevronRightIcon />
          </button>

          <div className='project__carousel-dots'>
            {images.map((src, i) => (
              <button
                key={src}
                type='button'
                aria-label={`go to image ${i + 1}`}
                aria-current={i === index}
                className={`project__carousel-dot${i === index ? ' is-active' : ''}`}
                onClick={(event) => handleControlClick(event, i)}
              />
            ))}
          </div>
        </>
      )}

      {isLightboxOpen && (
        <ImageLightbox
          images={images}
          alt={alt}
          initialIndex={index}
          onClose={handleLightboxClose}
        />
      )}
    </div>
  )
}

export default ProjectImageCarousel
