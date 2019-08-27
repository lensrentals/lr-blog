import React from 'react'

const ApiSelect = props => {
  return (
    <img 
    src={props.selected}
    alt={props.label}
    style={{
      margin: '0 auto',
      display: 'block',
      height: '200px',
      width: '200px'
    }}
    />
  )
}

export default ApiSelect

