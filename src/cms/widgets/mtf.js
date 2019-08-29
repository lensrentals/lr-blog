import React, { Component } from 'react'

// use default netlifycms list widget
const MtfControl = 'list'

class MtfPreview extends Component {

  render() {
    // conver immutable.js object back to javascript
    const props = this.props.value.toJS()[0]

    console.log(props)
    
    return(
      <div>
        <h2>{props.lens.name}</h2>
        {props.lens.descritpion && 
          <p>{props.lens.descritpion}</p>
        }
        {props.charts.map((chart, index) => {
          const data = JSON.parse(chart)
          return (
            <figure key={index} style={{margin: '0 auto'}}>
              <figcaption>
                <strong>{data.name}</strong>
              </figcaption>
              <img src={data.chart} alt={data.name} style={{width: '100%', maxWidth: '100%'}} />
            </figure>
          )
        })}
      </div>
    )
  }
}

export { MtfControl, MtfPreview }
