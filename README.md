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

## Publish Mode

[publish mode](https://www.netlifycms.org/docs/configuration-options/#publish-mode) is set to `editorial_workflow`, so posts can be drafted which will create an open PR in the git repo.

[squash merge](https://www.netlifycms.org/docs/beta-features/#squash-merge-github-pull-requests) beta feature is also turned on for these PRs.

<hr />

## Technology Notes

- Git based static site generators
    - Jekyll (ruby) https://jekyllrb.com/
        - Pros:
            - Some experience
            - Very mature
            - Ruby
        - Cons:
            - Slow-is
            - Decoupled from editing process
    - Gatsby (react) https://www.gatsbyjs.org/
        - Pros:
            - A lot of recent experience
            - Javascript / React
            - graphql
            - Fast
            - Large plugin library
            - Can integrate components well with cms
            - can source data from multiple origins (existing Wordpress site) https://www.gatsbyjs.org/packages/gatsby-source-wordpress/
        - Cons:
            - New-ish
            - Documentation missing
            - Pre-rendering SSR / SEO concerns
    - Hugo (go) https://gohugo.io/
        - Pros:
            - Go
            - Will seemed interested
        - Cons:
            - Go
- CMS systems
    - Netlify https://www.netlifycms.org/docs/intro/
        - Pros
            - Hostable wherever (AWS / github / netfliy )
            - Built in react, integrates well with javascript
            - Extensible, both in terms of templating and in terms on content types
                - Can make custom templates for pages
                - Can make custom widgets for data types
        - Cons
            - Not extremely well documented for non out-of-the-box use cases
            - Requires more initial setup, especially in terms of user experience
    - Forestry https://forestry.io/
        - Pros
            - More polished
            - Hostable wherever (AWS / github / netfliy )
        - Cons
            - No true widget customization, only shortcakes
- CDNs
    - cloudinary - https://cloudinary.com/
    - imgix - https://www.imgix.com/
    - We may want to stick with S3 for this.

- Stackbit - https://www.stackbit.com/
    - Cool tool for quickly scaffolding SSG/CMS combinations. 
    - Good for reference, but I think we’re better off setting up our own config rather than sifting through someone else’s

## Upgrade Plan Notes


## Phase 1 - Replicated Wordpress / Replace Frontend 
## Estimate:  3 weeks
- **Strategy**
	- Set up new Gatsby site
	- Source WP content - Source images? 
	- Set up WP to post to consumable endpoint

- **Frontend**
	- Framework / header / footer
	- Categories
	- Authors
	- Search
	- Feedly
	- Pages
	- Article List page 
	- Filter by category
	- Filter by tag? 
	- Filter by author 
	- Recent Posts 
	- Pagination 
	- “Category” grid page
	- Article Detail Page 
	- Article meta 
	- article body 
	- Content types?
	- Disqus comments 
	- Share functionality 
	- Tests 

- **Concerns / Notes**
	- We will most likely have to rebuild styles from scratch 
	- We will need to make sure all tracking/analytics also gets moved over correctly 
	- Content Writers can continue to edit the blog as they do now, through Wordpress, but this might complicate preview functionality. 
	- I’m unsure if this can still live at lensrentals.com/blog/wp-login.php, we might end up needing to move some Wordpress portions out of the way. 
	- There is possibly a complication of having too many posts - [https://www.gatsbyjs.org/packages/gatsby-source-wordpress/#typeerror---cannot-read-property-id-of-undefined-with-wordpresscom](https://www.gatsbyjs.org/packages/gatsby-source-wordpress/#typeerror---cannot-read-property-id-of-undefined-with-wordpresscom) 

## Phase 2 - CMS Switch / Replace Backend 
## Estimate: 4 Weeks (this could change depending on plugin scope, testing is kind of unknown here)
- **Planning**
	- Definition of user roles/level/permissions

- **Strategy**
	- Netlify CMS auth/hosting 
	- Creation of user roles/level/permissions
	- Come up with extensible template system
	- Move images between CDNs

- **Frontend**
	- Replicate all Wordpress editor functionality
	- Template system plumbing
	- Editor Components
	- Widget Components
	- SEO
	- Tests
	
- **Concerns / Notes**
	- Content Writer training on new system 
	- We want to make sure and audit all the Wordpress plugins used and make sure we think through all of their uses
	- I think thinking through frontmatter data shape now will make life easier in the future
	- Figuring out what common fields we can extract will be helpful too

## Phase 3 - New Content Types
## Estimate: 1-2 Weeks per type (could get faster as we go)
- **Planning**
	- What are the new content types?
	- Teardown, MTF chart, Review, Podcast, etc. 
	- Break these down into structured data
	- Break these down into Editor / Widget components - Possibly look at how to get WP posts into markdown data Design - - Content type templates / components

- **Strategy**
	- Possibly look at how to get WP posts into markdown data
	- Build component library documentation?

- **Frontend**
	- Build Editor / Widget components
	- Build Preview components
	- Build content type components
	- Build content type templates
	- Tests

- **Concerns / Notes**
	- This phase could be cyclical, go through all steps and build out requirements for one content type at a time.

## Phase 4 - Deprecate Wordpress?
- Do we want to do this?
	- After further investigating the WP REST API, the connection to graphql is fragile and I think we would do well to consider fully replacing the Wordpress end
- Do we need to move all 600+ posts into markdown?
	- Are we going to go back and edit past posts to fit them into new content types?
