import React from 'react'
import './Cockpit.scss'

const Cockpit = props => {
  let symbols = []

  for (let i = 0; i < props.cockpitLevel; i++) {
    symbols.push(<div />)
  }

  return (
    <div className="cockpit">
      {symbols}
      dada
    </div>
  )
}

export default Cockpit
