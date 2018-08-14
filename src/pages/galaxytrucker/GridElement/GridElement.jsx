import React, { Component } from 'react'
import Cockpit from '../Cockpit/Cockpit'
import './GridElement.scss'
import cn from 'classnames'

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
    this.setState({ isCockpit: true })
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
          <div className="tileOptions">
            {' '}
            <button className="button" onClick={e => this.props.setCockpitTile(e, this)}>
              abc
            </button>{' '}
            {this.props.isCockpit && <Cockpit cockpitLevel={3} />}
          </div>
        )}
      </div>
    )
  }
}

export default GridElement
