import React from 'react'
import { Link } from 'gatsby'

import Image from './image'

const BlogPreview = (props) => {
  
  const {
    title,
    meta,
    thumbnail
  } = props.frontmatter

  const { slug } = props.fields

  return (
    <div style={{
      margin: '1em 0',
      textAlign: 'center',
    }}>
      <Link to={slug}>
        <Image src={thumbnail.url} alt={thumbnail.alt} height={300} width={300} />
        <header>{title}</header>
        {meta.date}
      </Link>
    </div>
  )
}

export default BlogPreview