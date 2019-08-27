[![Netlify Status](https://api.netlify.com/api/v1/badges/4d8e8cf9-da40-435a-b74f-0bdc60834424/deploy-status)](https://app.netlify.com/sites/lr-blog-poc/deploys)

## how to run

Run locally with `gatsby develop`

To build, run `gatsby build`
This is also the script that will be run on [Netlify](https://lr-blog-poc.netlify.com/), and served from the `public` directory

## create a new gatsby site

```sh 
gatsby new lr-blog
```

## markdown pages

[Gatsby Doc For Adding Markdown Pages](https://www.gatsbyjs.org/docs/adding-markdown-pages/)

[gatsby-source-filesyste docs](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-source-filesystem)

markdown posts live at `src/content/type/*.md`

[gatsby-transformer-remark](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-transformer-remark)

templates live at `src/templates/*.js`

The [`onCreateNode`](https://www.gatsbyjs.org/docs/node-apis/#onCreateNode) API is used to let individual posts overwrite either their own url or template type

## mdx

[mdx](https://mdxjs.com/getting-started/gatsby) lets you use react in markdown files!

[how mdx works with gatsby](https://www.gatsbyjs.org/packages/gatsby-plugin-mdx/)

in order to use components in mdx via the netlify cms edidtor, `components` object is passed inside the `markdown.js` component via [mdxprovider](https://mdxjs.com/getting-started#mdxprovider)

## netfliycms

[netfliycms docs on gatsby](https://www.netlifycms.org/docs/gatsby/#add-netlify-cms-to-your-site)

Rather than follow the [steps for adding a config.yaml file](https://www.netlifycms.org/docs/gatsby/#configuration), this repo uses the `CMS.int()` version of this via the [netlify-cms-app](https://github.com/netlify/netlify-cms/tree/master/packages/netlify-cms-app). This lets us configure the cms via javascript rather than yaml files. 

The config file lives at `src/cms/cms.js`.

The auth version is current set to [gitgateway](https://www.netlifycms.org/docs/gatsby/#enable-identity-and-git-gateway), and can be accessed at `/admin`.

## netlify custom components

[editor-components](https://www.netlifycms.org/docs/custom-widgets/#registereditorcomponent) live at `src/cms/editor/*.js`
They are registered in `cms.js`
Each editor-component needs
 - ``id` - the value that is registered in `cms.js`
 - ``label` - the label that shows in the editor
 - ``fields` - fields
 - ``pattern` - a regex pattern that will read from the markdown file and convert the matching string into an editor block in the `body` field in the editor
 - ``fromBlock` - reads data from the `match` provided from `pattern` regex, populates the editor. This will error HARD if any of the `obj` regex return `undefined`
 - ``toBlock` - what is actually written to the markdown file, as a string
 - ``toPreview` - what is rendered in the cms editor preview. Netlify CMS prefers this to be a react component, and _can_ be any react component, even ones used for actual page display composition

## Cloudinary

[cloudinary.com/](https://cloudinary.com/)

Uses the [netlify-cms-media-library-cloudinary](https://www.npmjs.com/package/netlify-cms-media-library-cloudinary) plugin, is called with `CMS.registerMediaLibrary` in `src/cms/cms.js`

For display, also using the plugin [react-cloudinary-lazy-image](https://www.npmjs.com/package/react-cloudinary-lazy-image)


<!-- AUTO-GENERATED-CONTENT:START (STARTER)
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's default starter
</h1>

Kick off your project with this default boilerplate. This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.

_Have another more specific idea? You may want to check out our vibrant collection of [official and community-created starters](https://www.gatsbyjs.org/docs/gatsby-starters/)._

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the default starter.

    ```sh
    # create a new Gatsby site using the default starter
    gatsby new my-default-starter https://github.com/gatsbyjs/gatsby-starter-default
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd my-default-starter/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-default-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)

AUTO-GENERATED-CONTENT:END -->
