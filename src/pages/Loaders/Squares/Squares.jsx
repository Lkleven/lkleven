import React from 'react'
import PropTypes from 'proptypes'
import './Squares.scss'

const Squares = props => {
  const squareSize = () => parseInt(props.size, 10) / 2

  const squareStyle = {
    background: props.color,
    height: squareSize(),
    width: squareSize(),
    borderRadius: props.borderRadius,
    animationDuration: props.duration
  }

  const loaderStyle = {
    width: props.size,
    height: props.size,
    transform: `rotate(${props.rotation}deg)`
  }

  const Squares = () => {
    const squares = []
    for (let i = 0; i < 4; i++) {
      let style = { ...squareStyle }
      const dur = parseInt(props.duration, 10)
      style.animationDelay = props.alternating ? `${(dur / 2) * (i % 2)}ms` : `${(dur / 4) * i}ms`
      squares.push(<span style={style} />)
    }
    return squares
  }

  return (
    <div className="squares" style={loaderStyle}>
      <Squares />
    </div>
  )
}

Squares.defaultProps = {
  alternating: false,
  duration: '1000ms',
  borderRadius: '0',
  color: '#333',
  rotation: 0,
  size: '40px'
}

Squares.propTypes = {
  alternating: PropTypes.bool,
  duration: PropTypes.string,
  borderRadius: PropTypes.string,
  color: PropTypes.string,
  mode: PropTypes.string,
  rotation: PropTypes.number,
  size: PropTypes.string
}

export default Squares
