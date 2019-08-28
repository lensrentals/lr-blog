import commonFields from './common-fields'

import { mtfCharts } from '../../mock-data/mtf-charts'

export const charts = {
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
      label: 'MTF Chart Sets',
      name: 'chartset',
      widget: 'list',
      allow_add: true,
      fields: [
        {
          label: 'Lens',
          name: 'lens',
          widget: 'object',
          fields: [
            {
              label: 'Name', 
              name: 'name', 
              widget: 'string', 
            },
            {
              label: 'Storefront Link', 
              name: 'link', 
              widget: 'string', 
              required: false,
            },
            {
              label: 'Description', 
              name: 'descritpion', 
              widget: 'text', 
              required: false,
            },
          ]
        },
        {
          label: 'Charts',
          name: 'charts',
          widget: 'list',
          allow_add: true,
          fields: [
            {
              label: 'Chart', 
              name: 'chart', 
              widget: 'select', 
              multiple: true,
              options: mtfCharts.map(chart => ({
                label: chart.name,
                value: chart.chart
              }))
            },
          ],
        },
      ]
    }
  ]
};