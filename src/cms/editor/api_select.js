import React from 'react'

const api_fetch = fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
  .then(response => {
    return response.json()
  })
  .then(data => {
    return data.results.map((result, index) => ({
      label: result.name,
      value: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
    }))
  })
  .catch(err => {
    console.log("you're messing up somehow", err)
  })

const api_select = (fetchResults) => {

  return (
    {
      id: 'api_select',
      label: 'Api Select',
      fields: [
        {
          name: 'selected',
          label: 'Chose a Thing',
          widget: 'select',
          options: fetchResults,
          required: false,
        },
      ],
      pattern: /<ApiSelect(.*)/,
      fromBlock: function(match) {
        const string = match[0]
        const obj = {
          selected: string.includes('selected') ? string.match(/selected="(.*?)"/)[1] : '',
          label: string.includes('label') ? string.match(/label="(.*?)"/)[1] : '',
        };
        return obj;
      },
      // Function to create a text block from an instance of this component
      // what is actually written in the markdownfile
      toBlock: function(obj) {
        return `<ApiSelect label="${obj.label}" selected="${obj.selected}" />`
      },

      // What is rendered in the netlify editor
      toPreview: function(obj) {
        return <Preview {...obj} /> 
      }
    }  
  )
}

const Preview = props => {
  return (
    props.selected !== undefined ? <img style={{margin: '0 auto', display: 'block', height: '200px', width: '200px',}} src={props.selected} alt={props.label} /> : null
  )
}

export { api_select, api_fetch }