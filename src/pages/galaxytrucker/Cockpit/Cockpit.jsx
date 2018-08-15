import React from 'react'
import './Cockpit.scss'

const shipSizes = Object.freeze({ small: 1, medium: 2, large: 3 })
//shipSizes[this.state.shipSize]

const Cockpit = props => {
  let symbols = []

  for (let i = 0; i < props.cockpitLevel; i++) {
    symbols.push(<div />)
  }

  return <div className="cockpit">{symbols}</div>
}

export default Cockpit
