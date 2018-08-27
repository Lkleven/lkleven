import React, { Component } from 'react'
import Cockpit from '../Cockpit/Cockpit'
import TileButton from '../TileButton/TileButton'
import './GridElement.scss'
import cn from 'classnames'

const astronaut = require('../../../assets/icons/astronaut.svg')

class GridElement extends Component {
  constructor(props) {
    super(props)
    this.state = { selected: false, isCockpit: props.isCockpit, tileNumber: this.props.counter }
  }

  toggleSelected = () => {
    this.setState({ selected: !this.state.selected }, () => {
      this.props.updateCounter(this.state.selected ? 1 : -1, this)
    })
  }

  setCockpit() {
    this.setState({ isCockpit: !this.state.isCockpit })
  }

  render() {
    return (
      <div
        className={cn(`grid__element grid__element-${this.state.tileNumber}`, {
          selected: this.state.selected,
          cockpit: this.state.isCockpit
        })}
        ref="tileRef"
        onClick={this.toggleSelected}
      >
        {this.state.selected && (
          <React.Fragment>
            <div className="tileOptions">
              <TileButton icon={astronaut} onClickFunction={this.props.setCockpitTile} tile={this} />
              <TileButton onClickFunction={this.props.setCockpitTile} tile={this} diceDots={3} />
            </div>
            {this.props.isCockpit && <Cockpit cockpitLevel={3} />}
          </React.Fragment>
        )}
      </div>
    )
  }
}

export default GridElement
