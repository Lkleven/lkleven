import React, { Component } from 'react'
import GridElement from '../GridElement/GridElement'
import './GalaxyTrucker.scss'

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
      gridElements.push(<GridElement counter={i} updateCounter={this.updateCounter} />)
    }

    return (
      <div className="galaxytrucker">
        <h2 className="h2">
          Ship size: {this.state.tileCount}
          /45
        </h2>
        <div className="grid">{gridElements}</div>
      </div>
    )
  }
}

export default GalaxyTrucker
