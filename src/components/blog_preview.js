import React from 'react'
import { Link } from 'gatsby'

const BlogPreview = props => {
  return (
    <div style={{
      margin: '1em 0',
    }}>
      <Link to={props.fields.slug}>
        <header>{props.frontmatter.title}</header>
      </Link>
    </div>
  )
}

export default BlogPreview