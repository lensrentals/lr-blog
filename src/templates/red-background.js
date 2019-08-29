import React from "react"
import { graphql } from "gatsby"

import BlogPost from './blog-post'

const RedBackground = (props) => {
  
  return (  
    <BlogPost style style={{backgroundColor: 'maroon', color: 'white'}} />
  )
}

export default RedBackground