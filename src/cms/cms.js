import CMS from 'netlify-cms-app'
import cloudinary from 'netlify-cms-media-library-cloudinary';

import { blog } from './blog-fields'

CMS.registerMediaLibrary(cloudinary);

CMS.init({
  config: {
    load_config_file: false,
    backend: {
      name: 'github',
      repo: 'ryanfiller/lr-blog',
      branch: 'master',
      publish_mode: 'editorial_workflow',
    },
    media_library:{
      name: 'cloudinary',
      config: {
        cloud_name: 'lensrentals',
        api_key: '978623752449151'
      }
    },
    collections: [
      blog
    ]
  },
});