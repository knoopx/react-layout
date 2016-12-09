import React from 'react'

const styles = {
  horizontal: { height: 1 },
  vertical: { width: 1 },
}

export default class Divider extends React.PureComponent {
  static propTypes = {
    color: '#e9ecef',
    direction: React.PropTypes.oneOf(Object.keys(styles)).isRequired,
  }

  static defaultProps = {
    direction: 'horizontal',
  }

  render() {
    const { style, ...extraProps } = this.props

    return (
      <div {...extraProps} style={{ ...styles[this.props.direction], backgroundColor: this.props.color, ...style }} />
    )
  }
}
