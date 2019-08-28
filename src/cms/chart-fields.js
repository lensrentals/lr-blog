import commonFields from './common-fields'

export const chart = {
  label: 'Charts',
  name: 'charts',
  folder: 'src/content/charts',
  extension: 'mdx',
  format: 'frontmatter',
  create: true,
  delete: true,
  fields: [
    ...commonFields,
    {
      name: 'body',
      label: 'Body',
      // widget: 'mdx' 
      widget: 'markdown' 
    },
    {
      // put a list of charts here
    },
  ]
};