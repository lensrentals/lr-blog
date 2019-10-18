import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Markdown from '../components/markdown'
import Image from "../components/image"

const WordpressPost = (props) => {
  const { wordpressPost } = props.data // wordpressPost.Mdx holds our post data
  const { content } = wordpressPost

  // const Banner = () => {
  //   let image;
  //   if (!!frontmatter.page_banner) {
  //     image = frontmatter.page_banner
  //   } else {
  //     image = frontmatter.thumbnail
  //   }
  //   return <Image src={image.url} alt={image.alt} height={300} width={300} />
  // }
  
  return (  
    <Layout>
      <div className="blog-post-container">
        {/* <Banner /> */}
        <div className="blog-post">
          {/* <h1>{frontmatter.title}</h1> */}
          {/* <h2>{frontmatter.meta.date}</h2> */}
          {/* <Markdown post={body} /> */}
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
        hey
      </div>
    </Layout>
  )
}

export const wordpressPostQuery = graphql`
  query($id: String!) {
      wordpressPost(id: { eq: $id }) {
      id
      title
      date
      content
    }
  }
`

export default WordpressPost