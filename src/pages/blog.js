import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogPreview from '../components/blog_preview'

const BlogList = (props) => {

  const {
    edges
  } = props.data.allMarkdownRemark

  return (
    <Layout>
      <SEO title="Blog" />
      <Link to="/">Go back to the homepage</Link>
      {edges.map((edge, index) => <BlogPreview key={index} {...edge.node} />)}
    </Layout>
  )
}

export const blogListQuery = graphql`
  query BlogListQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___meta___date]},
      filter: {
        fields: { template: { eq: "blog" } },
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
  }
`

export default BlogList
