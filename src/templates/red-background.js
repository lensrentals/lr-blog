import React from "react"
import { graphql } from "gatsby"

import BlogPost from './blog'

const RedBackground = (props) => {
  
  return (  
    <div style={{backgroundColor: 'maroon', color: 'white'}}>
      <BlogPost {...props} />
    </div>
  )
}

export const redBackgroundQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        meta {
          date(formatString: "MMMM DD, YYYY")
        }
        page_banner {
          url
          alt
        }
        thumbnail {
          url
          alt
        }
      }
      body
    }
  }
`

export default RedBackground