import React, { useState, useEffect } from 'react'
import T from 'prop-types'

function ProgressiveImage({ highResolutionSrc, lowResolutionSrc, alt, ...props }) {
  const [imageSrc, setImageSrc] = useState(lowResolutionSrc)

  useEffect(() => {
    const img = new Image()
    img.src = highResolutionSrc
    img.onload = () => {
      setImageSrc(highResolutionSrc)
    }
  }, [highResolutionSrc])

  return <img src={imageSrc} alt={alt} {...props} />
}

export default React.memo(ProgressiveImage)

ProgressiveImage.propTypes = {
  highResolutionSrc: T.string,
  lowResolutionSrc: T.string,
  alt: T.string,
}
