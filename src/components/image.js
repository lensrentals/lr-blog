import React from 'react'
import Img from 'react-cloudinary-lazy-image'

// TODO this whole file needs rethinking
 
export default (props) => {
  
  const {
    src,
    alt,
    title,
    align,
    small,
  } = props

  let style;

  switch (align) {
    case 'full':
      style = {
        display: 'block',
        margin: '0 0 1em 0',
      }
      break;
    case 'left':
      style = {
        float: 'left',
        display: 'block',
        marginRight: '0 1em 1em 0',
        width: '50%',
      }
      break;
    case 'right':
      style = {
        float: 'right',
        display: 'block',
        marginLeft: '0 0 1em 1em',
        width: '50%',
      }
      break;
    default:
      // 'center'
      style = {
        display: 'block',
        margin: '0 auto 1em auto',
        width: '50%',
      }
  }

  if (small === 'true' && align !== 'full') {
    style.width = '25%';
  }

  style.border = '.5em ridge purple'

  return ( 
    <picture style={{...style}}>
      <img
        src={src}
        alt={alt}
        title={title}
        style={{margin: '0', lineHeight: '0', display: 'block', width: '100%'}}
      />
    </picture>
  )
}