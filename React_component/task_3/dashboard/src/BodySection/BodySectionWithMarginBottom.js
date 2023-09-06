import React, { Component } from 'react'
import BodySection from './BodySection';
import './BodySectionWithMarginBottom.css'

class BodySectionWithMarginBottom extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='bodySectionWithMargin'>
        <BodySection
          title={this.props.title}
          children={this.props.children} />
      </div>
    )
  }
}

export default BodySectionWithMarginBottom;