import React from 'react'

const MtfCharts = (props) => {

  return (
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

export default MtfCharts;