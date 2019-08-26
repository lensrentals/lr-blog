import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"

const BlogPost = (props) => {
  const { markdownRemark } = props.data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark

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
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const blogPostQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
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
    }
  }
`

export default BlogPost