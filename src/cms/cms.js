import CMS from 'netlify-cms-app'

import { blog } from './blog-fields'

CMS.init({
  config: {
    load_config_file: false,
    backend: {
      name: 'github',
      repo: 'ryanfiller/lr-blog',
      branch: 'master',
      publish_mode: 'editorial_workflow',
    },
    collections: [
      blog
    ]
  },
});