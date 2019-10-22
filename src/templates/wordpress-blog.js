import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Markdown from '../components/markdown'
import Image from "../components/image"
import { List } from "../components/meta"

const WordpressPost = (props) => {
  const { wordpressPost } = props.data // wordpressPost.Mdx holds our post data
  const { 
    title,
    date,
    content,
    categories,
   } = wordpressPost

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
          <header>
            <h1>{title}</h1>
            <h2>{date}</h2>
            <List title="categories" array={categories} />
          </header>
          {/* <Markdown post={body} /> */}
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
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
      categories {
        name
      }
    }
  }
`

export default WordpressPost