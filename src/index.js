import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class RussApp extends Component {
  render() {
    return (
      <div className="RussApp">
        <h1>Hello, React 2!</h1>
      </div>
    )
  }
}

ReactDOM.render(<RussApp />, document.getElementById('root'))