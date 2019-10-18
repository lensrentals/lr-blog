import React from 'react'
import { Link } from 'gatsby'


const WordpressPreview = (props) => {

  const {
    slug,
    title,
    date
  } = props

  return (
    <div style={{
      margin: '1em 0',
      textAlign: 'center',
    }}>
      <Link to={slug}>
        <header>{title}</header>
        {date}
      </Link>
    </div>
  )
}

export default WordpressPreview