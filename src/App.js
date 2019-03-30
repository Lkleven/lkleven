import React, { Component } from 'react'
import './App.scss'
import GalaxyTrucker from './pages/galaxytrucker/GalaxyTrucker/GalaxyTrucker'
import Loaders from './pages/Loaders/Loaders'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          {' '}
          <h1>Galaxy Trucker Templates</h1>
        </header>
        <GalaxyTrucker />
        <Loaders />
      </div>
    )
  }
}

export default App
