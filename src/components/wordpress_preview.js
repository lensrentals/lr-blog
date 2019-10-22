import React from 'react'
import { Link } from 'gatsby'


const WordpressPreview = (props) => {

  const {
    slug,
    title,
    date,
    author
  } = props

  return (
    <div style={{
      margin: '1em 0',
      textAlign: 'center',
    }}>
      <Link to={slug}>
        <header>{title}</header>
        <div>{date}</div>
        {author.name && <div>By: {author.name}</div>}
      </Link>
    </div>
  )
}

export default WordpressPreview