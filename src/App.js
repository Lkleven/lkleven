import React, { Component } from 'react'
import './App.scss'
import GalaxyTrucker from './pages/galaxytrucker/GalaxyTrucker/GalaxyTrucker'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          {' '}
          <h1>Galaxy Trucker Templates</h1>
        </header>
        <GalaxyTrucker />
      </div>
    )
  }
}

export default App
