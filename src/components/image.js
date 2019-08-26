import React from 'react'
import Img from 'react-cloudinary-lazy-image'

// TODO this whole file needs rethinking
 
export default (props) => {

  const getImageName = src => {
    const array = src.split('/')
    return array[array.length - 1]
  }

  return (
    <picture>
      <Img
          cloudName={'lensrentals'}
          imageName={getImageName(props.src)}
          fixed={{
              width: props.width,
              height: props.height
          }}
          urlParams={'g_face,c_lfill'}
          alt={props.alt}
      />
    </picture>
  )
}