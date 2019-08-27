export const blog = {
  label: 'Blog',
  name: 'blog',
  folder: 'src/content/blog',
  extension: 'mdx',
  format: 'frontmatter',
  create: true,
  delete: true,
  fields: [
    {
      name: 'title',
      label: 'Title',
      widget: 'string' 
    },
    {
      name: 'thumbnail',
      label: 'Thumbnail',
      widget: 'object',
      fields: [
        {
          name: 'url',
          label: 'Image',
          widget: 'image',
        },
        {
          name: 'alt',
          label: 'Alt Text',
          widget: 'string',
        }
      ]
    },
    {
      name: 'options',
      label: 'Options',
      widget: 'object',
      fields: [
        {
          name: 'published',
          abel: 'Published',
          widget: 'boolean', 
          default: false
        },
        {
          name: 'custompath',
          label: 'Custom Path',
          widget: 'string', 
          default: '',
          required: false
        },
        {
          name: 'customtemplate',
          label: 'Custom Template',
          widget: 'string',
          default: '', 
          required: false
        },
      ]
    },
    {
      name: 'meta',
      label: 'Meta',
      widget: 'object',
      fields: [
        {
          name: 'date',
          label: 'Date',
          widget: 'date' 
        },
      ]
    },
    {
      name: 'page_banner',
      label: 'Page Banner',
      widget: 'object',
      required: false,
      hint: '(this will default to thumbnail if empty)',
      fields: [
        {
          name: 'url',
          label: 'Image',
          widget: 'image',
          required: false,
        },
        {
          name: 'alt',
          label: 'Alt Text',
          widget: 'string',
          required: false,
        }
      ]
    },
    {
      name: 'body',
      label: 'Body',
      // widget: 'mdx' 
      widget: 'markdown' 
    },
  ]
};