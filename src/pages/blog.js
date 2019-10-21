import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogPreview from '../components/blog_preview'
import WordpressPreview from '../components/wordpress_preview'

const BlogList = (props) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <Link to="/">Go back to the homepage</Link>
      {props.data.allMdx.edges.map((edge, index) => <BlogPreview key={index} {...edge.node} />)}
<<<<<<< HEAD
      {/* {props.data.allWordpressPost.edges.map((edge, index) => <WordpressPreview key={index} {...edge.node} />)} */}
=======
      {props.data.allWordpressPost.edges.map((edge, index) => <WordpressPreview key={index} {...edge.node} />)}
>>>>>>> 4c21ba85ee8ae59cb75878f39bddf9cfaac03ecb
    </Layout>
  )
}

export const blogListQuery = graphql`
  query BlogListQuery {
    allMdx(
      sort: { order: DESC, fields: [frontmatter___meta___date]},
      filter: {
        # fields: { template: { eq: "blog" } },
        frontmatter: { options: { published: { eq: true } } }
      },
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            meta {
              date
            }
            thumbnail {
              url
              alt
            }
          }
        }
      }
    }

    # allWordpressPost {
    #   edges {
    #     node {
    #       slug
    #       title
    #       date
    #       content
    #     }
    #   }
    # }
  }
`

export default BlogList
