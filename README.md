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

### editor-components

[editor-components](https://www.netlifycms.org/docs/custom-widgets/#registereditorcomponent) are components that live inside the markdown body editor on every page that uses the `body` field. They live at `src/cms/editor/*.js`
They are registered in `cms.js`
Each editor-component needs
 - ``id` - the value that is registered in `cms.js`
 - ``label` - the label that shows in the editor
 - ``fields` - fields
 - ``pattern` - a regex pattern that will read from the markdown file and convert the matching string into an editor block in the `body` field in the editor
 - ``fromBlock` - reads data from the `match` provided from `pattern` regex, populates the editor. This will error HARD if any of the `obj` regex return `undefined`
 - ``toBlock` - what is actually written to the markdown file, as a string
 - ``toPreview` - what is rendered in the cms editor preview. Netlify CMS prefers this to be a react component, and _can_ be any react component, even ones used for actual page display composition

 Components
  - `image`
    - overwrites default NetlifyCMS image widget
    - renders `<img />` tag to markdown file, is converted to React `<Image />` component with (`mdxprovider`)[#mdx]

#### Sourcing Data in editor-components

TODO - explain how the async/await works when initializing CMS.init()

### widgets

[widgets](https://www.netlifycms.org/docs/custom-widgets/#registerwidget) are custom fields that can used to edit post frontmatter. They live at `src/cms/widgets/*.js`

[widget components](https://www.netlifycms.org/docs/custom-widgets/#writing-react-components-inline) *must be* React.Class components as they need to inherit `ref`s from the editor window.

#### control

control can be a react component or a string that corresponds to a default netlifycms widget.
React Components can inherit styles from native widgets by applying the `props.className` that is passed into them.

#### preview

preview is a react component that receives an immutable-js(https://immutable-js.github.io/immutable-js/) object as a `value` props. This can be converted back to javascript with the [`toJS()` method](https://immutable-js.github.io/immutable-js/#converts-back-to-raw-javascript-objects-)


## Cloudinary

[cloudinary.com/](https://cloudinary.com/)

Uses the [netlify-cms-media-library-cloudinary](https://www.npmjs.com/package/netlify-cms-media-library-cloudinary) plugin, is called with `CMS.registerMediaLibrary` in `src/cms/cms.js`

Uses the npm package [cloudinary-react](https://www.npmjs.com/package/cloudinary-react) for better image transformations.

[Cloudinary image transformation url params](https://cloudinary.com/documentation/image_transformation_reference) are used to build responsive images.