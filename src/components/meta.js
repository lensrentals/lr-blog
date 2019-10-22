import React from 'react'
import PropTypes from 'prop-types'

class List extends React.Component {
  render() {

    const { title, array } = this.props

    return (
      <ul aria-label={title}>
        {title && 
          <span>{title} :</span>
        }
        {array.length && 
          array.map((item, index) => (
            <li key={index}>
              {/* rf todo - thesee needs to link to appropriate list page */}
              {item.name}
            </li>
          ))
        }
      </ul>
    )
  }
}

List.propTypes = {
  title: PropTypes.string,
  array: PropTypes.array.isRequired,
}

// class Date extends React.Component {

// }

// Date.propTypes = {
// }

export { 
  List,
  // Date,
}