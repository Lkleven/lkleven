import React, { Component } from 'react'
import GridElement from '../GridElement/GridElement'
import './GalaxyTrucker.scss'

const TILES_MAX = 45

const shipSizes = Object.freeze({ 1: 'small', 2: 'medium', 3: 'large' })

class GalaxyTrucker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tileCount: 0,
      shipSize: '',
      tiles: {}, //can possibly be deleted
      cockpitTile: undefined
    }
  }

  updateCounter = (modifier, tile) => {
    this.setState({ tileCount: this.state.tileCount + modifier }, () => {
      this.updateShipSize()
      this.updateTilesArray(tile)

      if (modifier < 0 && tile.props.counter === this.state.cockpitTile) {
        this.removeCockpit()
      }
    })
  }

  updateShipSize() {
    let shipSize =
      this.state.tileCount <= 17 ? shipSizes['1'] : this.state.tileCount < 25 ? shipSizes['2'] : shipSizes['3']

    this.setState({ shipSize: shipSize })
  }

  removeCockpit() {
    this.setState({ cockpitTile: undefined })
  }

  updateTilesArray = tile => {
    let { ...tiles } = this.state.tiles

    const tileNo = tile.state.tileNumber

    {
      tiles[tileNo] ? (tiles[tileNo] = null) : (tiles[tileNo] = tile)
    }

    this.setState({ tiles: tiles })
  }

  setCockpitTile = (event, tile) => {
    event.stopPropagation()
    this.setState({ cockpitTile: tile.props.counter })
  }

  render() {
    let gridElements = []
    for (let i = 0; i < TILES_MAX; i++) {
      gridElements.push(
        <GridElement
          counter={i}
          updateCounter={this.updateCounter}
          setCockpitTile={this.setCockpitTile}
          isCockpit={this.state.cockpitTile === i ? true : false}
        />
      )
    }

    return (
      <div className="galaxytrucker">
        <h2>{this.state.cockpitTile}</h2>
        <h2 className="h2">
          Tiles: {this.state.tileCount}/{TILES_MAX}
        </h2>
        <input placeholder="Ship name" />
        <p>Ship size: {this.state.shipSize}</p>
        <div className="grid">{gridElements}</div>
      </div>
    )
  }
}

export default GalaxyTrucker
