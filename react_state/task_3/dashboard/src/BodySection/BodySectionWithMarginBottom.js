import React, { Component } from 'react'
import BodySection from './BodySection';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


class BodySectionWithMarginBottom extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={css(styles.margin)}>
        <BodySection
          title={this.props.title}
          children={this.props.children} />
      </div>
    )
  }
}

const styles = StyleSheet.create({
  margin: {
    marginBottom: 40,
  },
});

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}

export default BodySectionWithMarginBottom;