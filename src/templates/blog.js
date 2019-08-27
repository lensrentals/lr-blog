import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Markdown from '../components/markdown'
import Image from "../components/image"

const BlogPost = (props) => {
  const { mdx } = props.data // data.Mdx holds our post data
  const { frontmatter, body } = mdx

  const Banner = () => {
    let image;
    if (!!frontmatter.page_banner) {
      image = frontmatter.page_banner
    } else {
      image = frontmatter.thumbnail
    }
    return <Image src={image.url} alt={image.alt} height={300} width={300} />
  }
  
  return (  
    <Layout>
      <div className="blog-post-container">
        <Banner />
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.meta.date}</h2>
          <Markdown post={body} />
        </div>
      </div>
    </Layout>
  )
}

export const blogPostQuery = graphql`
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

export default BlogPost