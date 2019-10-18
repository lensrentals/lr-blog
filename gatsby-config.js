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
      resolve: "gatsby-source-wordpress",
      options: {
        protocol: "https",
        baseUrl: "lensrentals.com/blog",
        // Indicates whether the site is hosted on wordpress.com.
        hostingWPCOM: false,
        // If useACF is true, then the source plugin will try to import the WordPress ACF Plugin contents.
        useACF: false,
        // Include specific ACF Option Pages that have a set post ID
        acfOptionPageIds: [],
        // auth: {
        //   // If auth.user and auth.pass are filled, then the source plugin will be allowed
        //   // to access endpoints that are protected with .htaccess.
        //   htaccess_user: "your-htaccess-username",
        //   htaccess_pass: "your-htaccess-password",
        //   htaccess_sendImmediately: false,

        //   // If hostingWPCOM is true then you will need to communicate with wordpress.com API
        //   // in order to do that you need to create an app (of type Web) at https://developer.wordpress.com/apps/
        //   // then add your clientId, clientSecret, username, and password here
        //   // Learn about environment variables: https://www.gatsbyjs.org/docs/environment-variables
        //   // If two-factor authentication is enabled then you need to create an Application-Specific Password,
        //   // see https://en.support.wordpress.com/security/two-step-authentication/#application-specific-passwords
        //   wpcom_app_clientSecret: process.env.WORDPRESS_CLIENT_SECRET,
        //   wpcom_app_clientId: "54793",
        //   wpcom_user: "gatsbyjswpexample@gmail.com",
        //   wpcom_pass: process.env.WORDPRESS_PASSWORD,

        //   // If you use "JWT Authentication for WP REST API" (https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/)
        //   // or (https://github.com/jonathan-dejong/simple-jwt-authentication) requires jwt_base_path, path can be found in WordPress wp-api.
        //   // plugin, you can specify user and password to obtain access token and use authenticated requests against WordPress REST API.
        //   jwt_user: process.env.JWT_USER,
        //   jwt_pass: process.env.JWT_PASSWORD,
        //   jwt_base_path: "/jwt-auth/v1/token", // Default - can skip if you are using https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/
        // },
        // Set cookies that should be send with requests to WordPress as key value pairs
        cookies: {},
        // // Set verboseOutput to true to display a verbose output on `npm run develop` or `npm run build`
        // // It can help you debug specific API Endpoints problems.
        // verboseOutput: false,
        // Set how many pages are retrieved per API request.
        perPage: 5,
        // // Search and Replace Urls across WordPress content.
        // searchAndReplaceContentUrls: {
        //   sourceUrl: "https://source-url.com",
        //   replacementUrl: "https://replacement-url.com",
        // },
        // Set how many simultaneous requests are sent at once.
        concurrentRequests: 5,
        // // Set WP REST API routes whitelists
        // // and blacklists using glob patterns.
        // // Defaults to whitelist the routes shown
        // // in the example below.
        // // See: https://github.com/isaacs/minimatch
        // // Example:  `["/*/*/comments", "/yoast/**"]`
        // // ` will either include or exclude routes ending in `comments` and
        // // all routes that begin with `yoast` from fetch.
        // // Whitelisted routes using glob patterns
        includedRoutes: [
          // "**/categories",
          "**/posts",
          "**/pages",
          // "**/media",
          // "**/tags",
          // "**/taxonomies",
          // "**/users",
        ],
        // // Blacklisted routes using glob patterns
        excludedRoutes: [
          // "**/posts/1456"
        ],
        // // Set this to keep media sizes.
        // // This option is particularly useful in case you need access to
        // // URLs for thumbnails, or any other media detail.
        // // Defaults to false
        // keepMediaSizes: false,
        // // use a custom normalizer which is applied after the built-in ones.
        // normalizer: function({ entities }) {
        //   return entities
        // },
      },
    },
  ],
}
