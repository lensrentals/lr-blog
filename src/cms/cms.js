import CMS from 'netlify-cms-app'
import cloudinary from 'netlify-cms-media-library-cloudinary';

import { blog } from './blog-fields'

// editor components
import image from './editor/image'
import api_select, { api_fetch } from './editor/api_select'

// by moving the CMS methods into an async IFFE we can do fetch calls and pass them to components!
(async function startCms() {
  
  CMS.registerMediaLibrary(cloudinary);
  
  // editor components
  CMS.registerEditorComponent(image);
  const fetch_results = await api_fetch
  CMS.registerEditorComponent(api_select(fetch_results));

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
})()