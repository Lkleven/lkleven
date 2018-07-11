import React, { Component } from 'react'
import logo from './logo.svg'
import './App.scss'
import GalaxyTrucker from './pages/galaxytrucker/galaxytrucker.jsx'

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
