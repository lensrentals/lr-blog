import React, { Component } from 'react'
import MtfCharts from '../../components/mtf_charts'

// use default netlifycms list widget
const MtfControl = 'list'

class MtfPreview extends Component {

  render() {
    // conver immutable.js object back to javascript
    const props = this.props.value.toJS()[0]
    
    // use actual component from site
    return <MtfCharts {...props} />
  }
}

export { MtfControl, MtfPreview }
