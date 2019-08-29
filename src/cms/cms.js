import CMS from 'netlify-cms-app'
import cloudinary from 'netlify-cms-media-library-cloudinary';

// collection field partials
import { blog } from './fields/blog'
import { charts } from './fields/charts'

// editor components
import image from './editor/image'
import { api_select, api_fetch } from './editor/api_select'

// widgets
import { MtfControl, MtfPreview } from './widgets/mtf'

// by moving the CMS methods into an async IFFE we can do fetch calls and pass them to components!
(async function startCms() {
  
  CMS.registerMediaLibrary(cloudinary);
  
  // widgets
  CMS.registerWidget('mtf', MtfControl, MtfPreview);

  // editor components
  CMS.registerEditorComponent(image);
  const fetch_results = await api_fetch
  CMS.registerEditorComponent(api_select(fetch_results));

  CMS.init({
    config: {
      load_config_file: false,
      backend: {
        // name: 'github',
        name: 'git-gateway',
        // accept_roles: [  // optional - accepts all users if left out
        //   'admin',
        //   'editor'
        // ],
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
        blog,
        charts
      ]
    },
  });
})()