import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogPreview from '../components/blog_preview'
import WordpressPreview from '../components/wordpress_preview'

const IndexPage = (props) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <h2>markdown posts</h2>
      {props.data.allMdx.edges.map((edge, index) => <BlogPreview key={index} {...edge.node} />)}
      <h2>wordpress posts</h2>
      {props.data.allWordpressPost.edges.map((edge, index) => <WordpressPreview key={index} {...edge.node} />)}
      {console.log('allWordpressWpUsers', props.data.allWordpressWpUsers)}
    </Layout>
  )
}

export const IndexPageQuery = graphql`
  query IndexPageQuery {
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

    allWordpressPost {
      edges {
        node {
          slug
          title
          date
          content
          author {
            name
          }
        }
      }
    }

    allWordpressWpUsers {
      edges {
        node {
          id
          wordpress_id
          name
        }
      }
    }
  }
`

export default IndexPage

