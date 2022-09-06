import React, {Component} from 'react'
import TableAsSimpleComponent from './TableAsSimpleComponent'

class RussApp extends Component {
  render() {
    return (
      <div className="container">
        <h1>Hello, React 2!</h1>
        <TableAsSimpleComponent />
      </div>
    )
  }
}

export default RussApp