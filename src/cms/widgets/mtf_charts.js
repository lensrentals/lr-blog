import React from 'react'

const MtfChartControl = (props) => {
  // const handleChange = (e) => {
  //   props.onChange(e.target.value);
  // }

  console.log('MtfChartControl props', props)

  const {
    forID,
    value,
    onChange,
    classNameWrapper,
  } = this.props;

  return (
    <input
      type="text"
      id={forID}
      className={classNameWrapper}
      value={value || ''}
      onChange={e => onChange(e.target.value)}
    />
  )
}

const MtfChartPreview = (props) => {
  return(
    <div style={{background: 'red', color: 'white'}}>
      this is the preview: {props.value}
    </div>
  )
}

export { MtfChartControl, MtfChartPreview }
