import React from 'react'
import './TileButton.scss'

const TileButton = props => {
  let diceDots = []

  for (let i = 0; i < props.diceDots; i++) {
    diceDots.push(<div />)
  }

  return (
    <button onClick={e => props.onClickFunction(e, props.tile)}>
      {props.icon ? <img src={props.icon} alt="" /> : <div className="diceDots">{diceDots}</div>}
    </button>
  )
}

export default TileButton
