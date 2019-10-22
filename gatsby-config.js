module.exports = {
  siteMetadata: {
    title: `LR Blog Poc`,
    description: `Is Gatsby + Netlify a good idea? Lets find out.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
			resolve: `gatsby-plugin-netlify-cms`,
			options: {
				manualInit: true,
				modulePath: `${__dirname}/src/cms/cms.js`,
			},
		},
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
				extensions: [`.mdx`, `.md`, `.markdown`],
				defaultLayouts: {
          content: require.resolve("./src/components/markdown.js"),
        },
        // gatsby-transformer-remark plugins can still be loaded
				// gatsbyRemarkPlugins: [], 
      },
		},
    // ^ my plugins, v their plugins
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },

    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'www.lensrentals.com/blog',
        hostingWPCOM: false,
        protocol: 'https',
        useACF: false, // ???
        auth: {},
        verboseOutput: false,
        includedRoutes: [
          "**/posts",
          "**/pages",
          "**/categories",
          "**/tags",
          "**/users",
        ],
        perPage: 100,
        concurrentRequests: 100,
      },
    },
  ],
}
