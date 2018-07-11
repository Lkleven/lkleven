import React, { Component } from 'react'
import './galaxytrucker.scss'
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

class GalaxyTrucker extends Component {
  constructor(props) {
    super(props)
    this.state = { tileCount: 0 }
  }

  updateCounter = modifier => {
    this.setState({ tileCount: this.state.tileCount + modifier })
  }

  render() {
    let gridElements = []
    for (let i = 0; i < 45; i++) {
      gridElements.push(
        <GridElement counter={i} updateCounter={this.updateCounter} />
      )
    }

    return (
      <div className="galaxytrucker">
        <h2 className="h2">Ship size: {this.state.tileCount}/45</h2>
        <div className="grid">{gridElements}</div>
      </div>
    )
  }
}

export default GalaxyTrucker
