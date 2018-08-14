import React, { Component } from 'react'
import './GridElement.scss'
import cn from 'classnames'

class GridElement extends Component {
  constructor(props) {
    super(props)
    this.state = { selected: false }
  }

  toggleSelected = () => {
    this.setState({ selected: !this.state.selected }, () => {
      this.props.updateCounter(this.state.selected ? 1 : -1)
    })
  }

  render() {
    return (
      <div
        className={cn(`grid__element grid__element-${this.props.counter}`, {
          selected: this.state.selected
        })}
        onClick={this.toggleSelected}
      />
    )
  }
}

export default GridElement
