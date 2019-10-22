const path = require(`path`)
const { slugify } = require(`./src/helpers`)


exports.onCreateNode = ({ node, actions }) => {
	const { createNodeField } = actions
	if (node.internal.type === `Mdx`) {
    const directory = node.fileAbsolutePath.match(/([^\/]+)\/[^/]+$/)[1]
    let slug;
    let template;
    
    if (node.frontmatter.options.customurl) {
      url = slugify(node.frontmatter.options.customurl);
    } else {
      url = slugify(node.frontmatter.title);
    }
    slug = `${directory}/${url}`;
    
    
    if (node.frontmatter.options.customtemplate) {
      template = node.frontmatter.options.customtemplate;
    } else {
      template = directory;
    }
    
    createNodeField({
      node,
      name: 'id',
      value: node.id,
    })

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })

		createNodeField({
			node,
			name: `template`,
			value: template,
		})
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMdx (
        sort: { order: DESC, fields: [frontmatter___meta___date] }
        limit: 1000
      ) {
        edges {
          node {
            id
            fields {
              slug
              template
						}
          }
        }
      }

      allWordpressPost (
        limit: 1000
      ) {
        edges {
          node {
            id
            slug
            title
            date
            content
            categories {
              name
            }
            author {
              name
            }
          }
        }
      }

      allWordpressWpUsers (
        limit: 1000
      ) {
        edges {
          node {
            wordpress_id
            name
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/${node.fields.template}.js`),
      context: {
        id: node.id,
        slug: node.fields.slug,
        template: node.fields.template,
      },
    })
  })
}